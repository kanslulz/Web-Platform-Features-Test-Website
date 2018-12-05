
self.addEventListener('install', event => {
  event.waitUntil(skipWaiting());
});

self.addEventListener('activate', event => {
  event.waitUntil(clients.claim());
});

async function postMessageToWindow(msg) {
  const matchedClients = await clients.matchAll({type: 'window'});
  for (const client of matchedClients) {
    client.postMessage(msg);
  }
}

self.addEventListener('sync', event => {
  event.waitUntil(postMessageToWindow(`Got sync event: <pre>${event.tag}</pre>`));
});
