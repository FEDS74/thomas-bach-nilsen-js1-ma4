const createGamesUrl = "https://api.rawg.io/api/games";

fetch(createGamesUrl)
  .then(function(response){
    return response.json();
  })
  .then(function(json){
    creatGames(json);
  })
  .catch(function(error){
    console.log(error);
  });



function creatGames(json){

    const results = json.results;
    console.dir(results);

const resultsGamesContainer = document.querySelector(".results");

let html = "";

results.forEach(function(game) {

  html += `<div class="game">
              <h2>${game.name}</h2>
              <img src="${game.background_image}" alt="${game.name}">
           </div>`;
});
resultsGamesContainer.innerHtml = html;
}
