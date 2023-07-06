import React, { useState } from "react";

const UserFormOptimal = (props) => {
  // ---------------------------------------------
  // I) VARIABLES & HOOKS
  // ---------------------------------------------
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password: "",
  });

  // ---------------------------------------------
  // II) HANDLERS & AUX FUNCTIONS
  // ---------------------------------------------

  const handleOnChangeUserDetails = (e) => {
    let key = e.target.name;
    let value = e.target.value;
    let userDetailsToUpdate = { ...userDetails, [key]: value };
    // Update the state
    setUserDetails(userDetailsToUpdate);
  };

  const handleOnSubmitCreateUser = (e) => {
    e.preventDefault(); // Prevents the default behavior of the submit button in form
                        // (which is to refresh the page)
    let { username, email, password } = userDetails;
    const newUser = { username, email, password };
    // Above is the same as:
    // const newUser = { username: username, email: email, password:password };
    // Console log the new user
    console.log("Welcome", newUser);
    // Reset States
    setUserDetails({
      username: "",
      email: "",
      password: "",
    });
  };

  // ---------------------------------------------
  // III) JSX
  // ---------------------------------------------
  return (
    <div className="w-50 mt-4 mx-auto">
      <h1>Create User Form</h1>
      <form onSubmit={handleOnSubmitCreateUser}>
        <div className="mb-3">
          <label className="form-label">Username: </label>
          <input
            type="text"
            className="form-control"
            name = "username"
            value={userDetails.username}
            onChange={handleOnChangeUserDetails}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email Address: </label>
          <input
            type="email"
            className="form-control"
            name = "email"
            value={userDetails.email}
            onChange={handleOnChangeUserDetails}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password: </label>
          <input
            type="password"
            className="form-control"
            name = "password"
            value={userDetails.password}
            onChange={handleOnChangeUserDetails}
          />
        </div>

        <input type="submit" value="Create User" className="btn btn-primary" />
      </form>
    </div>
  );
};

export default UserFormOptimal;
