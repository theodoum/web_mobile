function reduireArray(array, size) {
  if (array.length <= size) {
    return [array];
  }
  return [array.slice(0, size), ...reduireArray(array.slice(size), size)];
}

const dateTimeFormat = Intl.DateTimeFormat("fr");

function recup_fav(){
  fetch("http://localhost:3000/favoris", {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  }).then(res => {
    return res.json();
  }).then(data => {
    console.log("fonction", data);
    return data;
  });
}

var test = recup_fav();
console.log("Test: "+test);

function afficher(json, data){
  if(typeof(data) == "undefined"){
    data = [];
  }
  console.log("Non null: "+data);
	const selections = reduireArray(json, 3);

  let html = "";

  selections.forEach(selection => {
    html += '<div class="columns">';

    selection.forEach((repo) => {
      var id = repo.name.replace(' ', '_');
      
      console.log("Data: "+data+" Id: "+id);
      if(data.includes(id)){
        var is_fav = "is_fav";
      }else{
        var is_fav = "no_fav";
      }

      html += `
            <div class="column">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img
                    src="https://bulma.io/images/placeholders/1280x960.png"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <figure class="image is-48x48">
                      <img
                        src="https://bulma.io/images/placeholders/96x96.png"
                        alt="Placeholder image"
                      />
                    </figure>
                  </div>
                  <div class="media-content">
                    <p class="title is-4">${repo.name}</p>
                    <p class="subtitle is-6">@Parcourir</p>
                  </div>
                </div>
  
                <div class="content">
                   ${repo.description}
                  <br />
                  Dernière mise à jour: <time datetime="${
                    repo.updated_at
                  }">${dateTimeFormat.format(new Date(repo.updated_at))}</time>
                  <br>
                  <div class="box_btn_favoris">
                    <button onclick="click_favoris(this.id)" class="${is_fav}" id="${id}">Favoris</button>
                  </div>
                </div>
              </div>
            </div>
          </div>`;
    });
    html += "</div>";
  });

  document.querySelector(".container").innerHTML = html;
}

document.addEventListener("DOMContentLoaded", function () {
  if (navigator.onLine) {
    document.querySelector(".notification").setAttribute("hidden", "");
  }

  window.addEventListener("online", () => {
    document.querySelector(".notification").setAttribute("hidden", "");
  });
  window.addEventListener("offline", () => {
    document.querySelector(".notification").removeAttribute("hidden");
  });

  let fetchData;
  if (navigator.onLine) {
    fetchData = fetch("https://suspicious-pare-499c00.netlify.app/images.json")
      .then((response) => response.json())
      .then((data) => localforage.setItem("data", data));
  } 
  else {
    fetchData = localforage.getItem("data");
  }

  fetchData.then((json) => afficher(json, data=recup_fav()));
});

function click_favoris(id_elm){
  var elm = document.getElementById(id_elm);
  if(elm.className == "no_fav"){
    elm.className="is_fav";
  }else{
    elm.className="no_fav";
  }

  fetch("http://localhost:3000/favoris", {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({id_elm}),
  }).then(res => {
    return res.json();
  }).then(data => {
    console.log("click", data)
    favs = data;
  });
}