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
        html += '<div class="columns">';
        selection.forEach(repo => { html += `<div class="column"><div class="card"><div class="card-image"><figure class="image is-4by3"><img src="https://bulma.io/images/placeholders/1280x960.png"alt="Placeholder image"/></figure></div><div class="card-content"><div class="media"><div class="media-left"><figure class="image is-48x48"><imgsrc="https://bulma.io/images/placeholders/96x96.png"alt="Placeholder image"/></figure></div><div class="media-content"><p class="title is-4">${repo.name}</p><p class="subtitle is-6">@Parcourir</p></div></div><div class="content">${repo.description}<br />Dernière mise à jour: <time datetime="${repo.updated_at}">${dateTimeFormat.format(new Date(repo.updated_at))}</time></div></div></div></div>`; }); html += "</div>";
    });
    document.querySelector(".container").innerHTML = html;
}

const json = [
    {
        name: "Image 1",
        created_at: "2020-09-19T10:05:12Z",
        updated_at: "2020-10-09T12:09:56Z",
    },
    {
        name: "Image 2",
        created_at: "2014-06-10T11:41:39Z",
        updated_at: "2014-06-10T11:43:11Z",
    },
    {
        name: "Image 3",
        created_at: "2014-06-10T11:41:39Z",
        updated_at: "2018-12-11T14:07:57Z",
        description: "AngularJS directive for AsciiDoctor",
    },
    {
        name: "Image 4",
        description: "AngularJS directive for AsciiDoctor",
        created_at: "2014-06-10T11:41:39Z",
        updated_at: "2014-11-25T16:57:27Z",
    },
    {
        name: "Image 5",
        description: "CLI tool for Angular",
        created_at: "2018-10-08T10:58:58Z",
        updated_at: "2018-10-25T14:58:47Z",
    }
];

document.addEventListener("DOMContentLoaded", function () { afficher(json) });

if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register("/sw.js")
        .then((reg) => { console.log("votre service worker a été enregistré!"); })
        .catch((error) => { console.error(error); });
} else {
    console.warn("Service workers are not supported.");
}