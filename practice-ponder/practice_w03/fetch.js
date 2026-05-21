// fetch.js
const url = "https://pokeapi.co/api/v2/pokemon/ditto";
const urllist = "https://pokeapi.co/api/v2/pokemon";
let results = null;
async function getPokemon(url) {
  const response = await fetch(url);
  //check to see if the fetch was successful
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    doStuff(data);
  }
}


function doStuff(data) {
  const output = document.querySelector("#output");
  results = data;
  const html =`<h2>${results.name}</h2>
              <img src="${results.sprites.front_default}" alt="Image of ${results.name}">`;
  output.innerHTML = html;
  console.log("first: ", results);
}


async function doStuffList(data) {

  console.log(data);
  const pokelistelement = document.querySelector("#outputlist")
  const pokeList = data.results;
  pokeList.forEach((currentItem) => {
    const html = `<li>${currentItem.name}</li>`;

    pokelistelement.innerHTML +=  html;
  });
}

function getPokemonList(url) {
  const response = await fetch(urllist);
  if (response.ok) {

    const data = await response.json();
    doStuffList(data);
  }
}

getPokemon(url);
console.log("second: ", results);

getPokemonList(urllist)