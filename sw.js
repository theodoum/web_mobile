/*self.addEventListener('fetch', event => {
    const url = event.request.url;
    if (url.indexOf("https://suspicious-pare-499c00.netlify.app/images.json") === 0) {
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
});*/

const cacheName = "galerie";
const files = [
    "/",
    "/script.js",
    "https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.css",
    "https://bulma.io/images/placeholders/1280x960.png",
    "https://bulma.io/images/placeholders/96x96.png"
];