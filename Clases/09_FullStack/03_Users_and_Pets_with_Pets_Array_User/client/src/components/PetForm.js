import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import DeleteButton from "./DeleteButton";

import axios from "axios";
import _ from "lodash";

const PetForm = (props) => {
  // --------------------------------------------------
  // I) HOOKS AND VARIABLES
  // --------------------------------------------------

  // Variables
  const { formType } = props;

  // State Hooks
  const [pet, setPet] = useState({
    name: "",
    type: "",
    owner: "",
  });
  const [usersList, setUsersList] = useState([]);
  const [errorMessages, setErrorMessages] = useState({});

  // Params and Navigate Hooks
  const navigate = useNavigate();
  const { petId } = useParams();

  // Effect Hooks
  useEffect(() => {
    if (formType === "update") {
      getOnePetById();
    }
    getAllUsers();
  }, []);

  // --------------------------------------------------
  // II) HANDLERS AND AUXILIAR FUNCTIONS
  // --------------------------------------------------

  // i) Handlers
  const onChangePetDetailsHandler = (e) => {
    let petToUpdate = { ...pet };
    petToUpdate[e.target.name] = e.target.value;
    setPet(petToUpdate);
  };

  const onSubmitPetDetailsHandler = (e) => {
    e.preventDefault();
    if (formType === "create") {
      createPet(pet);
    } else if (formType === "update") {
      updatePet(pet);
    }
  };

  // ii) API Functions
  const getOnePetById = async () => {
    try {
      let res = await axios.get("http://localhost:8000/api/pets/" + petId);
      let petToUpdate = {
        petId: res.data._id,
        name: res.data.name,
        type: res.data.type,
        owner: res.data.owner._id,
      };
      setPet(petToUpdate);
    } catch (err) {
      console.log(err);
    }
  };

  const getAllUsers = async () => {
    try {
      let res = await axios.get("http://localhost:8000/api/users");
      setUsersList(_.orderBy(res.data, ["last_name"], ["asc"]));
    } catch (err) {
      console.log(err);
    }
  };

  const createPet = async (pet) => {
    try {
      let res = await axios.post("http://localhost:8000/api/pets", pet);
      navigate("/");
    } catch (err) {
      console.log(err);
      updateErrorMessages(err);
    }
  };

  const updatePet = async (pet) => {
    try {
      let res = await axios.put("http://localhost:8000/api/pets/" + petId, pet);
      navigate("/");
    } catch (err) {
      console.log(err);
      updateErrorMessages(err);
    }
  };

  // iii) Auxiliar Functions
  const updateErrorMessages = (err) => {
    let errors = err.response.data.errors?.errors;
    let errorMesagesToUpdate = _.mapValues(errors, (error) => {
      return error.message;
    });
    if (err.response.data.message?.includes("UUID")) {
      errorMesagesToUpdate.owner = "Please select an owner";
    }
    setErrorMessages(errorMesagesToUpdate);
  };

  // --------------------------------------------------
  // III) JSX
  // --------------------------------------------------
  return (
    <div className="mt-3 w-50 bg-light py-3">
      <form onSubmit={onSubmitPetDetailsHandler}>
        {/* Name Field */}
        <div className="row mb-3">
          <label htmlFor="name" className="col-2 col-form-label text-left">
            Name:
          </label>
          <div className="col-5">
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={pet.name}
              onChange={onChangePetDetailsHandler}
            />
            {_.has(errorMessages, "name") && (
              <div className="text-danger small">{errorMessages.name}</div>
            )}
          </div>
        </div>

        {/* Type Field */}
        <div className="row mb-3">
          <label htmlFor="type" className="col-2 col-form-label text-left">
            Type:
          </label>
          <div className="col-5">
            <input
              type="text"
              className="form-control"
              id="type"
              name="type"
              value={pet.type}
              onChange={onChangePetDetailsHandler}
            />
            {_.has(errorMessages, "type") && (
              <div className="text-danger small">{errorMessages.type}</div>
            )}
          </div>
        </div>

        {/* Owner Field */}
        <div className="row mb-3">
          <label htmlFor="owner" className="col-2 col-form-label text-left">
            Owner:
          </label>
          <div className="col-5">
            <select
              type="text"
              className="form-select"
              id="owner"
              name="owner"
              onChange={onChangePetDetailsHandler}
              value={pet.owner}
            >
              {_.isEmpty(pet.owner) && (
                <option value="">Select an owner</option>
              )}
              {usersList &&
                usersList.map((item, idx) => (
                  <option key={idx} value={item._id}>
                    {item.first_name} {item.last_name}
                  </option>
                ))}
            </select>
            {_.has(errorMessages, "owner") && (
              <div className="text-danger small">{errorMessages.owner}</div>
            )}
          </div>
        </div>

        <button className="btn btn-success" type="submit">
          {formType === "create" ? "Add" : "Edit"}
        </button>
        <DeleteButton
          petId={petId}
          changeStyle={true}
        />
      </form>
    </div>
  );
};

export default PetForm;
