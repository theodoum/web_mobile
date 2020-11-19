document.addEventListener("DOMContentLoaded",
    function () {
        fetch("https://suspicious-pare-499c00.netlify.app/images.json")
            .then((response) => response.json())
            .then((json) => console.log(json));
    });