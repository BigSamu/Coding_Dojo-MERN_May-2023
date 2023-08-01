import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

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
  const [usersList, setUsersList] = useState();
  const [errorMessages, setErrorMessages] = useState();

  // Params and Navigate Hooks
  const navigate = useNavigate();
  const { petId } = useParams();

  // Effect Hooks
  useEffect(() => {
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

    // Above same as:
    // setPet({ ...pet, [e.target.name]: e.target.value });
  }; // setState is asynchronous, so we can't console.log(pet) right after setPet(petToUpdate)

  const onSubmitPetDetailsHandler = (e) => {
    e.preventDefault();
    createPet();
  };

  // ii) API Calls
  const getAllUsers = async () => {
    try {
      let res = await axios.get("http://localhost:8000/api/users");
      console.log(res.data);
      setUsersList(_.orderBy(res.data, ["last_name"], ["asc"]));
    } catch (err) {
      console.log(err);
    }
  };

  const createPet = async () => {
    try {
      let res = await axios.post("http://localhost:8000/api/pets", pet);
      navigate("/");
    } catch (err) {
      console.log(err);
      // extract error messages from err.response.data
      updateErrorMEssages(err);
    }
  };

  // iii) Aux Functions
  const updateErrorMEssages = (err) => {
    let errors = err.response.data.errors.errors;
    let errorMessagesToUpdate = _.mapValues(errors, (error) => error.message);
    setErrorMessages(errorMessagesToUpdate);
  };

  // --------------------------------------------------
  // III) JSX
  // --------------------------------------------------
  return (
    <div className="mt-3 w-50 bg-light p-3 border border-1">
      <form onSubmit={onSubmitPetDetailsHandler}>
        {/* Name Field */}
        <div className="row mb-3">
          <label htmlFor="name" className="col-sm-2 col-form-label text-left">
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
            <div className="text-danger small">{errorMessages?.name}</div>
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
            <div className="text-danger small">{errorMessages?.type}</div>
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
              required
            >
              <option value="">Select an owner</option>
              {usersList &&
                usersList.map((item, idx) => (
                  <option key={idx} value={item._id}>
                    {item.first_name} {item.last_name}
                  </option>
                ))}
            </select>
          </div>
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-success">
          Add
        </button>
      </form>
    </div>
  );
};

export default PetForm;
