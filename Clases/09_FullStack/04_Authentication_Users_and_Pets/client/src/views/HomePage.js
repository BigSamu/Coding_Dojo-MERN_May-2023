import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import PetTable from '../components/PetTable'

const HomePage = () => {

  // ---------------------------------------------
  // I) VARIABLES & HOOKS
  // ---------------------------------------------
  const [usersList, setUsersList] = useState();


  // ---------------------------------------------
  // II) HANDLERS & AUX FUNCTIONS
  // ---------------------------------------------

  // ---------------------------------------------
  // III) JSX
  // ---------------------------------------------
  return (
    <div>
      
      <div className="d-flex align-items-center">
        <span> Add new Pet:</span>
        <Link to="/pets/new" className="mx-2 btn btn-success btn-md py-0"> Add Pet</Link>
      </div>
      <hr/>
      <h3 className = "text-decoration-underline"> List of Pets</h3>
      <PetTable usersList={usersList} setUsersList={setUsersList}/>
    </div>
  )
}

export default HomePage
