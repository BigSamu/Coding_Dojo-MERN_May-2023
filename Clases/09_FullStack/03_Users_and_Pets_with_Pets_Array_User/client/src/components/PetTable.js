import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import DeleteButton from "./DeleteButton";

import axios from "axios";
import _ from "lodash";

const PetList = (props) => {
  // --------------------------------------------------
  // I) HOOKS AND VARIABLES
  // --------------------------------------------------

  // Variables
  const { usersList, setUsersList } = props;

  // State Hooks
  const [petsList, setPetsList] = useState([]);

  // Effect Hooks
  useEffect(() => {
    getAllPets();
  }, []);

  // --------------------------------------------------
  // II) HANDLERS AND AUXILIAR FUNCTIONS
  // --------------------------------------------------

  const getAllPets = async () => {
    try {
      let res = await axios.get("http://localhost:8000/api/pets");
      setPetsList(_.orderBy(res.data, ["name"], ["asc"]));
    } catch (err) {
      console.log(err);
    }
  };


  const removePetFromLists = (petId) => {
    // Remove pet from petsList
    setPetsList(petsList.filter((pet) => pet._id !== petId));

    // Remove pet from user in sersList
    let updatedUsersList = [...usersList];
    let userToUpdate = updatedUsersList.find((user) => user.pets.find((pet) => pet._id === petId));
    userToUpdate.pets = userToUpdate.pets.filter((pet) => pet._id !== petId);
    setUsersList(updatedUsersList);
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
            <th scope="col">Type</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {petsList &&
            petsList.map((item, idx) => (
              <tr key={idx}>
                <th scope="row">{idx + 1}</th>
                <td>{item.name}</td>
                <td>{item.type}</td>
                <td>
                  <Link
                    className="mx-1 btn btn-link btn-sm py-0"
                    to={`pets/${item._id}`}
                  >
                    Details
                  </Link>
                  |
                  <Link
                    className="mx-1 btn btn-outline-success btn-sm py-0"
                    to={`pets/${item._id}/edit`}
                  >
                    Edit
                  </Link>
                  |
                  <DeleteButton
                    pet={item}
                    changeStyle={false}
                    removePetFromLists={removePetFromLists}
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default PetList;
