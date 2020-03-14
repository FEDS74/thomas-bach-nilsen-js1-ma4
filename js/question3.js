const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const creatorsUrl = "https://api.rawg.io/api/games/4200";

fetch(creatorsUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        createGameDetails(json);
    })
    .catch(function(error) {
      console.log(error);
    });

function createGameDetails(json) {
console.dir(json);


    const imageOfGame = document.querySelector(".image");
    imageOfGame.style.backgroundImage = `url("${json.background_image}")`;


    const nameOfGame = document.querySelector("h1");
    nameOfGame.innerHTML = json.name;

    const descriptionOfGame = document.querySelector(".description");
    descriptionOfGame.innerHTML = json.description;
}
