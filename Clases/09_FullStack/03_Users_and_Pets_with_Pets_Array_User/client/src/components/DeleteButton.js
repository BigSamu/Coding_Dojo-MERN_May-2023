import React from "react";

import axios from "axios";
import _ from "lodash";

const DeleteButton = (props) => {
  // --------------------------------------------------
  // I) HOOKS AND VARIABLES
  // --------------------------------------------------

  // i) Lifting States and Callbacks
  const { pet,petId, changeStyle, removePetFromLists } = props;

  // --------------------------------------------------
  // II) HANDLERS AND AUXILIAR FUNCTIONS
  // --------------------------------------------------

  const handleOnClickDeleteButton = (e) => {

    if (pet) {
      deletePet(pet._id);
    }
    else {
      deletePet(petId);
    }
  };

  const deletePet = async (petId) => {
    try {
      let res = await axios.delete("http://localhost:8000/api/pets/" + petId);
      removePetFromLists(petId);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <button
        className={`
          mx-${changeStyle ? "2" : "1"}
          btn btn-outline-danger ${changeStyle ? "" : "btn-sm py-0"}
        `}
        onClick={handleOnClickDeleteButton}
      >
        Delete
      </button>
    </>
  );
};

export default DeleteButton;
