import React, {useState} from "react";
import { Link } from "react-router-dom";

import UserTable from "../components/UserTable";
import PetTable from "../components/PetTable";

const HomePage = () => {
  // --------------------------------------------------
  // I) HOOKS AND VARIABLES
  // --------------------------------------------------

  // State Hooks
  const [usersList, setUsersList] = useState();

  // --------------------------------------------------
  // II) HANDLERS AND AUXILIAR FUNCTIONS
  // --------------------------------------------------

  // --------------------------------------------------
  // III) JSX
  // --------------------------------------------------
  return (
    <div>
      <h1 className="text-decoration-underline mb-3">Super Pets Website</h1>
      <div className="d-flex align-items-center">
        <span> Add New Pet: </span>
        <Link className="mx-2 btn btn-success btn-md py-0" to={"/pets/new"}>
          New
        </Link>
      </div>
      <hr />
      <h3 className="text-decoration-underline">Current Users</h3>
      <UserTable usersList={usersList} setUsersList={setUsersList} />
      <h3 className="text-decoration-underline">List of Pets</h3>
      <PetTable usersList={usersList} setUsersList={setUsersList} />
    </div>
  );
};

export default HomePage;
