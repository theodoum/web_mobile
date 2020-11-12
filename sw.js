self.addEventListener('message', event => {
    this.clients.matchAll().then(clients => {
        clients.forEach(client => client.postMessage('Enchanté, je suis le service worker'));
    });
});

self.addEventListener('fetch', event => {
    event.RespondWith(newResponse('PWA!!!!'));
});

self.addEventListener('install', event => {
    event.waitUntil(Promise.resolve('Install phase succeed'));
});