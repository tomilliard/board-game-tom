// netlify/functions/send-push.js
// Reçoit { userIds: [...], title, body, url, tag } et envoie une notification
// push à tous les appareils abonnés de ces joueurs.
//
// Variables d'environnement requises (Netlify → Site settings → Environment) :
//   VAPID_PUBLIC_KEY            (clé publique VAPID)
//   VAPID_PRIVATE_KEY           (clé privée VAPID)
//   VAPID_SUBJECT              (optionnel, ex: mailto:tom@boardgametom.com)
//   SUPABASE_URL              (URL du projet Supabase, ex: https://xxxx.supabase.co)
//   SUPABASE_SERVICE_ROLE_KEY  (clé service_role — secrète, côté serveur uniquement)

const webpush = require('web-push');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const PUB  = process.env.VAPID_PUBLIC_KEY;
  const PRIV = process.env.VAPID_PRIVATE_KEY;
  const SUBJ = process.env.VAPID_SUBJECT || 'mailto:noreply@boardgametom.com';
  const SB_URL = (process.env.SUPABASE_URL || '').replace(/\/+$/, '');
  const SB_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
  console.log('[push] config présente ?', {
    VAPID_PUBLIC_KEY: !!PUB, VAPID_PRIVATE_KEY: !!PRIV,
    VAPID_SUBJECT: SUBJ, SUPABASE_URL: !!SB_URL, SUPABASE_SERVICE_ROLE_KEY: !!SB_KEY,
  });
  if (!PUB || !PRIV || !SB_URL || !SB_KEY) {
    console.error('[push] CONFIG MANQUANTE');
    return { statusCode: 500, body: 'Configuration push manquante' };
  }

  webpush.setVapidDetails(SUBJ, PUB, PRIV);

  let payload;
  try { payload = JSON.parse(event.body || '{}'); }
  catch { return { statusCode: 400, body: 'JSON invalide' }; }

  const { userIds, title, body, url, tag } = payload;
  console.log('[push] requête:', { userIds, title });
  if (!Array.isArray(userIds) || !userIds.length || !title) {
    return { statusCode: 400, body: 'Champs requis manquants (userIds, title)' };
  }

  // Récupère les abonnements de ces joueurs via la clé service role (bypass RLS).
  const inList = userIds.map((id) => `"${id}"`).join(',');
  let subs = [];
  try {
    const res = await fetch(
      `${SB_URL}/rest/v1/push_subscriptions?user_id=in.(${inList})&select=id,endpoint,p256dh,auth`,
      { headers: { apikey: SB_KEY, Authorization: `Bearer ${SB_KEY}` } }
    );
    const txt = await res.text();
    console.log('[push] lecture abonnements: HTTP', res.status, '→', txt.slice(0, 300));
    subs = JSON.parse(txt);
  } catch (e) {
    console.error('[push] lecture abonnements échouée:', e.message);
    return { statusCode: 500, body: 'Lecture des abonnements impossible' };
  }
  if (!Array.isArray(subs) || !subs.length) {
    console.log('[push] aucun abonnement trouvé pour ces user_ids');
    return { statusCode: 200, body: JSON.stringify({ sent: 0 }) };
  }
  console.log('[push]', subs.length, 'abonnement(s) trouvé(s)');

  const notif = JSON.stringify({ title, body: body || '', url: url || '/', tag });
  const stale = [];   // endpoints expirés à nettoyer
  let sent = 0;

  await Promise.all(subs.map(async (s) => {
    const subscription = { endpoint: s.endpoint, keys: { p256dh: s.p256dh, auth: s.auth } };
    try {
      await webpush.sendNotification(subscription, notif);
      sent++;
    } catch (err) {
      console.error('[push] envoi échoué (status', err.statusCode + '):', (err.body || err.message || '').toString().slice(0, 200));
      // 404/410 = abonnement expiré ou révoqué → à supprimer.
      if (err.statusCode === 404 || err.statusCode === 410) stale.push(s.id);
    }
  }));
  console.log('[push] envoyés:', sent, '/ expirés:', stale.length);

  // Nettoyage des abonnements morts.
  if (stale.length) {
    try {
      await fetch(
        `${SB_URL}/rest/v1/push_subscriptions?id=in.(${stale.join(',')})`,
        { method: 'DELETE', headers: { apikey: SB_KEY, Authorization: `Bearer ${SB_KEY}` } }
      );
    } catch (e) { /* non bloquant */ }
  }

  return { statusCode: 200, body: JSON.stringify({ sent, cleaned: stale.length }) };
};
