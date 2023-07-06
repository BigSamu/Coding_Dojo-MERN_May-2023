import React, { useState } from "react";

const FruitTable = (props) => {
  // ---------------------------------------------
  // I) VARIABLES & HOOKS
  // ---------------------------------------------
  const { fruits } = props;

  // ---------------------------------------------
  // II) JSX
  // ---------------------------------------------
  return (
    <div className="w-50 mt-4 mx-auto">
      <h1>My Fruit Table</h1>
      <table className="table table-striped table-borderd">
        <thead className="thead-dark">
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {fruits && fruits.map((item, idx) =>
            <tr key={idx}>
              <td>{idx + 1}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default FruitTable;
