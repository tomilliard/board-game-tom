// sw.js — Service worker BoardGameTom
// Rôle : recevoir les notifications push et gérer le clic dessus.
// (Pas de cache offline ici : on reste simple et sûr.)

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// Réception d'une notification push envoyée par le serveur.
self.addEventListener('push', (event) => {
  let data = {};
  try { data = event.data ? event.data.json() : {}; } catch (e) { data = {}; }
  const title = data.title || 'BoardGameTom';
  const options = {
    body:  data.body || '',
    icon:  data.icon || 'assets/icon-192.png',
    badge: 'assets/icon-192.png',
    tag:   data.tag || undefined,        // regroupe les notifs de même type
    data:  { url: data.url || '/' },
    vibrate: [80, 40, 80],
  };
  event.waitUntil(self.registration.showNotification(title, options));
});

// Clic sur la notification : ouvre/active l'appli sur la bonne page.
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const url = (event.notification.data && event.notification.data.url) || '/';
  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((list) => {
      for (const client of list) {
        if ('focus' in client) { client.navigate(url); return client.focus(); }
      }
      if (self.clients.openWindow) return self.clients.openWindow(url);
    })
  );
});
