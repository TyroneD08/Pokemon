const pokemonImage = document.getElementById("js--pokemon-image");
let randomNumber = Math.floor(Math.random() * 250 + 1);


let pokemon = fetch("https://pokeapi.co/api/v2/pokemon/" + randomNumber)
    .then(function (response){
    console.log(response);
    return response.json();
    })
    .then(function (realData){
    console.log(realData);
    pokemonImage.src = realData.sprites.front_default;
    });

 const catchButton = document.getElementById("js--catch-button");
 const pokemonText = document.getElementById("js--pokemon-text");
 let pokemonGamePlayed = false;


 catchButton.onclick = function(){
    if(pokemonGamePlayed === false){
        let catchNumber = Math.floor(Math.random() * 2);
        if(catchNumber === 0){
           pokemonText.innerText = "Pokemon Fled!"
        }
        else{
            pokemonText.innerText = "Pokemon Caught!"
        }
        pokemonGamePlayed = true;
    }
   
 }

const nameText = document.getElementById("js--name");
let inputField = document.getElementById("js--input");
inputField.onkeyup = function(event){
    if(event.keyCode === 13){
        let name = inputField.value;


        let age = fetch("https://api.agify.io?name=" + name)
            .then(function(response){
                return response.json();
            })
            .then(function(echteData){
                inputField.style.display = "none";
                nameText.innerText= echteData.age;
            });
 
    }
}


const searchTitle = document.getElementById("js--search-title");
const searchText = document.getElementById("js--search-text");
let searchQ = "Hyouka";
 
let searchResult = fetch("https://api.tvmaze.com/search/shows?q=" + searchQ)
    .then(function(response)
    {
        return response.json();
    })
    .then(function(realData){
        searchTitle.innerText = realData[0].show.name;
        searchText.innerText = realData[0].show.summary.replace(/<\/?p>/g, '');
    })
 o



