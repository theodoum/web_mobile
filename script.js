var json = [
    {
        "name": "Éléphant",
        "create-date": "2020-08-11",
        "description": "Un éléphant qui vole"
    },
    {
        "name": "Ballon",
        "create-date": "2020-06-14",
        "description": "Un ballon qui vole"
    },
    {
        "name": "Flotteur",
        "create-date": "2020-01-25",
        "description": "Un flotteur qui vole"
    },
    {
        "name": "Avion",
        "create-date": "2020-01-25",
        "description": "Un avion qui vole"
    },
    {
        "name": "Chien",
        "create-date": "2019-12-28",
        "description": "Un chien qui vole"
    },
    {
        "name": "Chat",
        "create-date": "2019-11-02",
        "description": "Un chat qui vole"
    }
]

for(var i = 0; i < json.lenght; i++){
    var img = document.createElement("img");
    img.src = "./img/img.jpg";
    document.getElementById("list_img").appendChild(img);
}