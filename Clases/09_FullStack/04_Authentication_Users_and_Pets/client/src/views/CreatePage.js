import React from 'react'
import { Link } from 'react-router-dom'
import PetForm from '../components/PetForm'

const CreatePage = () => {

  // ---------------------------------------------
  // I) VARIABLES & HOOKS
  // ---------------------------------------------

  // ---------------------------------------------
  // II) HANDLERS & AUX FUNCTIONS
  // ---------------------------------------------

  // ---------------------------------------------
  // III) JSX
  // ---------------------------------------------
  return (
    <div>
     
      <h4> Add a new pet </h4>
      <PetForm formType={"create"}/>
      <hr/>
      <div className="mt-2">
        <Link to={"/"}>Back to Home</Link>
      </div>
    </div>
  )
}

export default CreatePage
