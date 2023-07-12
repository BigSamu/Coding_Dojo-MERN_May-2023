import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  // ---------------------------------------------
  // I) VARIABLES & HOOKS
  // ---------------------------------------------

  // 1.1) States
  const [pokemons, setPokemons] = useState();
  const [sendRequest, setSendRequest] = useState(false);

  // 1.2) Effects
  useEffect(() => {
    if(sendRequest){
      fetch("https://pokeapi.co/api/v2/pokemon/?limit=807")
        .then((response) => response.json())
        .then((data) => {
          setPokemons(data.results);
        })
        .catch((error) => console.log(error));
      setSendRequest(false);
    }

  }, [sendRequest]);

  // ---------------------------------------------
  // II) HANDLERS & AUX FUNCTIONS
  // ---------------------------------------------

  const handleOnClickFetchPokemons = (e) => {
    setSendRequest(true);
  }
  // ---------------------------------------------
  // III) JSX
  // ---------------------------------------------
  return (
    <div className="App bg-light p-3 text-left">
      <div className="w-25 mt-2 mx-auto">
        <button
          className="btn btn-primary btn-block"
          onClick={handleOnClickFetchPokemons}
        >
          Fetch Pokemons
        </button>
        <p className="my-3">List of Pokemons: </p>
        <ol>
          {pokemons && pokemons.map((item, idx) =>
            <li key={idx}>{item.name}</li>
          )}
        </ol>
      </div>
    </div>

  );
};

export default App;
