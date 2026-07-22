// netlify/functions/send-email.js
// Reçoit { toEmail, toName, subject, text } depuis le client et relaie vers Brevo.
// La clé API reste ici, côté serveur (variable d'environnement BREVO_KEY).

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const apiKey = process.env.BREVO_KEY;
  const from   = process.env.BREVO_FROM;
  if (!apiKey || !from) {
    return { statusCode: 500, body: 'Configuration manquante (BREVO_KEY / BREVO_FROM)' };
  }

  let payload;
  try {
    payload = JSON.parse(event.body || '{}');
  } catch {
    return { statusCode: 400, body: 'JSON invalide' };
  }

  const { toEmail, toName, subject, text, html } = payload;
  if (!toEmail || !subject) {
    return { statusCode: 400, body: 'Champs requis manquants (toEmail, subject)' };
  }

  try {
    const res = await fetch('https://api.brevo.com/v3/smtp/email', {
      method:  'POST',
      headers: { 'api-key': apiKey, 'Content-Type': 'application/json' },
      body:    JSON.stringify({
        sender:      { name: 'Board Game Tom', email: from },
        to:          [{ email: toEmail, name: toName || toEmail }],
        subject,
        ...(html ? { htmlContent: html } : {}),
        ...(text ? { textContent: text } : {}),
      }),
    });

    const data = await res.text();
    if (!res.ok) {
      return { statusCode: res.status, body: data };
    }
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: data,
    };
  } catch (e) {
    return { statusCode: 500, body: String(e) };
  }
};
