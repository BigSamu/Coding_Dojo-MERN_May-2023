import React, {useState, useEffect} from "react";

const ListSwapi = (props) => {

  // ---------------------------------------------
  // I) VARIABLES & HOOKS
  // ---------------------------------------------

  // 1.1) States
  const [people, setPeople] = useState();

  // 1.2) Effects
  useEffect(() => {
    fetch("https://swapi.dev/api/people")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results);
        setPeople(data.results)
      })
      .catch((error) => console.log(error));

  }, []);

  // ---------------------------------------------
  // II) JSX
  // ---------------------------------------------
  return (
    <div>
      <h1>Star Wars Characters</h1>
      <ul>
        {people && people.map((item, idx) => (
          <li key={idx}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};
export default ListSwapi;
