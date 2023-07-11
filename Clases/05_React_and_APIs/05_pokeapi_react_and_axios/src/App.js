import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  // ---------------------------------------------
  // I) VARIABLES & HOOKS
  // ---------------------------------------------

  // 1.1) States
  const [pokemons, setPokemons] = useState({});
  const [sendRequest, setSendRequest] = useState(false);

  // 1.2) Effects - Way One
  // useEffect(() => {
  //   if (sendRequest) {
  //     axios
  //       .get("https://pokeapi.co/api/v2/pokemon/?limit=807")
  //       .then((response) => setPokemons(response.data.results))
  //       .catch((error) => console.log(error));
  //     setSendRequest(false);
  //   }
  // }, [sendRequest]);

  // 1.2) Effects - Way Two
  useEffect(() => {
    if (sendRequest) {
      getPokemonsFromAPI(); // call async function
      setSendRequest(false);
    }
  }, [sendRequest]);

  // ---------------------------------------------
  // II) HANDLERS & AUX FUNCTIONS
  // ---------------------------------------------

  const handleOnClickFetchPokemons = (e) => {
    setSendRequest(true);
  };

  // With 1.2) Effects - Complement Way Two
  const getPokemonsFromAPI = async () => {
    try {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon/?limit=807"
      );
      setPokemons(response.data.results);
    } catch (error) {
      console.log(error);
    }
  }

  // ---------------------------------------------
  // III) JSX
  // ---------------------------------------------
  return (
    <div className="App bg-light p-3 text-left">
      <div className="w-25 mt-2 mx-auto">
        <button
          className="btn btn-secondary mb-3 d-block"
          onClick={handleOnClickFetchPokemons}
        >
          {" "}
          Fetch Pokemon
        </button>
        <p className="mb-1">List of Pokemons: </p>
        <ol>
          {pokemons &&
            pokemons.map((pokemon, index) => (
              <li key={index}>{pokemon.name}</li>
            ))}
        </ol>
      </div>
    </div>
  );
};

export default App;
