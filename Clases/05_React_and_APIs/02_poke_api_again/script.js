// MODERN WAY - THEN/CATCH
// document.addEventListener("DOMContentLoaded", () => {
//   let pokemonListElement = document.getElementById("pokemon-list");
//   let fetchButton = document.getElementById("fetchButton");

//   fetchButton.addEventListener("click", () => {
//     fetch("https://pokeapi.co/api/v2/pokemon?limit=15")
//       .then((response) => response.json())
//       .then((data) => {
//         let pokemonList = data.results;
//         pokemonList.forEach((poken,idx) => {
//           let listItem = document.createElement("li");
//           listItem.className = "list-group-item";
//           listItem.textContent = `${idx + 1}. ${poken.name}`;
//           pokemonListElement.appendChild(listItem);
//         })
//       })
//       .catch((error) => console.log(error))
//   });
// });

// MODERN WAY - ASYNC/AWAIT WITH TRY/CATCH
document.addEventListener("DOMContentLoaded", () => {
  let pokemonListElement = document.getElementById("pokemon-list");
  let fetchButton = document.getElementById("fetchButton");

  fetchButton.addEventListener("click", async () => {
    try {
      let response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=15");
      let data = await response.json();
      let pokemonList = data.results;
      pokemonList.forEach(function(pokemon, idx) {
        var listItem = document.createElement("li");
        listItem.className = "list-group-item";
        listItem.textContent = `${idx + 1}. ${pokemon.name}`;
        pokemonListElement.appendChild(listItem);
      });
    } catch (error) {
      console.log(error);
    }
  });
});
