self.addEventListener('install', event => {
  event.waitUntil(skipWaiting());
});

self.addEventListener('activate', event => {
  event.waitUntil(clients.claim());
});

self.addEventListener('push', event => {  
  const data = event.data.json();

  const options = {
    body: data.body,
    icon: 'images/icon.png',
  };

  event.waitUntil(self.registration.showNotification(data.title, options));
});