self.addEventListener('fetch', event => {
    const url = event.request.url;
    if (url.indexOf("https://monNomDeDomaine/images.json") === 0) {
        event.respondWith(
            fetch(event.request).then((response) => {
                if (response.statusText !== "OK") {
                    console.error("Service Worker", "Error when fetching", event.request.url);
                    return response;
                }
                console.info("Formatting data");
                return response.json().then((json) => {
                    const formattedResponse = json.map((j) => ({ name: j.name, description: j.description || "", updated_at: j.updated_at, }));
                    return new Response(JSON.stringify(formattedResponse));
                });
            })
        );
    }
});

/*self.addEventListener('message', event => {
    this.clients.matchAll().then(clients => {
        clients.forEach(client => client.postMessage('Enchanté, je suis le service worker'));
    });
});

self.addEventListener('install', event => {
    event.waitUntil(Promise.resolve('Install phase succeed'));
});*/