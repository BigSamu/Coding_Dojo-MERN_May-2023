import React from "react";

import axios from "axios";
import _ from "lodash";

const DeleteButton = (props) => {
  // --------------------------------------------------
  // I) HOOKS AND VARIABLES
  // --------------------------------------------------

  const { pet, removePetFromList } = props;

  // --------------------------------------------------
  // II) HANDLERS AND AUXILIAR FUNCTIONS
  // --------------------------------------------------

  // i) Handlers
  const handleOnClickDeleteButton = (e) => {
    deletePetById(pet._id); // Delete From Database (API Call to backend)
    removePetFromList(pet._id); // Delete From List State (Update in Frontend)
  };

  // ii) API Calls
  const deletePetById = async (petId) => {
    try {
      let res = await axios.delete(
        "http://localhost:8000/api/pets/" + petId
      );
      console.log(res);
    } catch (err) {
      console.error(err);
    }
  };

  // --------------------------------------------------
  // III) JSX
  // --------------------------------------------------
  return (
    <>
      <button
        className={`mx-1 btn btn-outline-danger btn-sm py-0`}
        onClick={handleOnClickDeleteButton}
      >
        Delete
      </button>
    </>
  );
};

export default DeleteButton;
