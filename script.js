document.addEventListener("DOMContentLoaded",
    function () {
        fetch("https://suspicious-pare-499c00.netlify.app/images.json")
            .then((response) => response.json())
            .then((json) => afficher(json));
    });

function reduireArray(array, size) {
    if (array.length <= size) {
        return [array];
    }
    return [array.slice(0, size), ...reduireArray(array.slice(size), size)];
}
const dateTimeFormat = Intl.DateTimeFormat("fr");
function afficher(json) {
    const repos = json.map(j => ({ name: j.name, description: j.description || "", updated_at: j.updated_at }));
    const selections = reduireArray(repos, 3);
    let html = "";
    selections.forEach(selection => {
        html += '<div class="columns">'; selection.forEach(repo => {
            html += `<div class="column"><div class="card"><div class="card-image"><figure class="image is-4by3"><img src="https://bulma.io/images/placeholders/1280x960.png"alt="Placeholder image"/></figure></div> <div class="card-content"><div class="media"><div class="media-left"><figure class="image is-48x48"><img src="https://bulma.io/images/placeholders/96x96.png"alt="Placeholder image"/></figure></div><div class="media-content"><p class="title is-4">${repo.name}</p> <p class="subtitle is-6">@Parcourir</p></div></div><div class="content">${repo.description}<br />Dernière mise à jour: <time datetime="${repo.updated_at}">${dateTimeFormat.format(new Date(repo.updated_at))}</time> </div></div></div></div>`;
        });
        html += "</div>";
    });
    document.querySelector(".container").innerHTML = html;
}

window.addEventListener('offline', event => {
    console.log("Vous venez de passer en mode hors ligne ! ");
});

window.addEventListener('online', event => {
    console.log("Vous venez de passer en mode en ligne ! ");
});

Cache.add(request);
Cache.addAll([request1, request2]);
Cache.match(request).then(response => {
    console.log(response);
});
Cache.matchAll([request1, request2]).then(([response1, response2]) => {
    console.log(response1 + " " + response2);
});