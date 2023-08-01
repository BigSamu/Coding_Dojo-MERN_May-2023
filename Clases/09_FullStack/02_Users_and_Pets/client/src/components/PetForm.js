import React, {useState, useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom'

import axios from 'axios'
import _ from 'lodash'


const PetForm = (props) => {
  // --------------------------------------------------
  // I) HOOKS AND VARIABLES
  // --------------------------------------------------

  // Variables
  const {formType} = props;

  // State Hooks
  const [pet, setPet] = useState({
    name: "",
    type: "",
    owner: ""
  });
  const [usersList, setUsersList] = useState();

  // Params and Navigate Hooks
  const navigate = useNavigate();
  const {petId} = useParams();

  // Effect Hooks
  useEffect(() => {
    getAllUsers()
  }, []);

  // --------------------------------------------------
  // II) HANDLERS AND AUXILIAR FUNCTIONS
  // --------------------------------------------------

  const getAllUsers = async () => {
    try {
      let res = await axios.get("http://localhost:8000/api/users");
      console.log(res.data);
      setUsersList(_.orderBy(res.data, ["last_name"], ["asc"]));
    } catch (err) {
      console.log(err);
    }
  };

  // --------------------------------------------------
  // III) JSX
  // --------------------------------------------------
  return (
    <div>PetForm</div>
  )
}

export default PetForm
