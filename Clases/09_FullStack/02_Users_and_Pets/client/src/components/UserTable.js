import React, { useState, useEffect } from "react";

import axios from "axios";
import _ from "lodash";

const UserTable = (props) => {
  // --------------------------------------------------
  // I) HOOKS AND VARIABLES
  // --------------------------------------------------

  // Variables
  const {usersList, setUsersList} = props;

  // Effect Hooks
  useEffect(() => {
    getAllUsers();
  }, []);

  // --------------------------------------------------
  // II) HANDLERS AND AUXILIAR FUNCTIONS
  // --------------------------------------------------

  const getAllUsers = async () => {
    try {
      let res = await axios.get("http://localhost:8000/api/users");
      setUsersList(_.orderBy(res.data, ["first_name"], ["asc"]));
    } catch (err) {
      console.error(err);
    }

    // Below same as above:
    // axios.get("http://localhost:8000/api/users")
    //   .then((res) => setUsersList(res.data))
    //   .catch((err) => console.error(err));
  };

  // --------------------------------------------------
  // III) JSX
  // --------------------------------------------------
  return (
    <div className="w-75 mt-4">
      <table className="table table-striped">
        <thead className="table-secondary">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Interests</th>
            <th scope="col">Pets</th>
          </tr>
        </thead>
        <tbody>
          {usersList && usersList.map((item, idx) => (
            <tr key={idx}>
              <th scope="row">{idx + 1}</th>
              <td>{item.first_name} {item.last_name}</td>
              <td>{item.age}</td>
              <td>{item.interests.join(", ")}</td>
              <td> {item.pets.map((pet) => pet.name).join(", ")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
