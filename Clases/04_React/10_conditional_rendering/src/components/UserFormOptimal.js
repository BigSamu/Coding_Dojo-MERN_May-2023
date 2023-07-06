import React, { useState } from "react";

const UserFormOptimal = (props) => {
  // ---------------------------------------------
  // I) VARIABLES & HOOKS
  // ---------------------------------------------
  const [usernameDetails, setUsernameDetails] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [formHasBeenSubmitted, setFormHasBeenSubmitted] = useState(false);

  // ---------------------------------------------
  // II) HANDLERS & AUX FUNCTIONS
  // ---------------------------------------------

  const handleOnChangeUserDetails = (e) => {
    let { name, value } = e.target;
    let userDetailsToUpdate = { ...usernameDetails, [name]: value };
    setUsernameDetails(userDetailsToUpdate);
    // Set the formHasBeenSubmitted to false
    setFormHasBeenSubmitted(false);
  };

  const handleOnSubmitCreateUser = (e) => {
    e.preventDefault(); // Prevents the default behavior of the submit button in form
    // (which is to refresh the page)
    let { username, email, password } = usernameDetails;
    let newUser = { username, email, password };
    // Console log the new user
    console.log("Welcome", newUser);
    // Set the formHasBeenSubmitted to true
    setFormHasBeenSubmitted(true);
    // Reset States
    setUsernameDetails({
      username: "",
      email: "",
      password: "",
    });
  };

  const formMessage = () => {
    if (formHasBeenSubmitted) {
      return "Thank you for submitting the form!";
    } else {
      return "Welcome, please submit the form";
    }
  };

  // ---------------------------------------------
  // III) JSX
  // ---------------------------------------------
  return (
    <div className="w-50 mt-4 mx-auto">
      <h1>Create User Form</h1>
      {/* I) Way One */}
      {/* <h4
        className={`alert ${
          formHasBeenSubmitted ? "alert-success" : "alert-info"
        }`}
      >
        {formMessage()}
      </h4> */}
      {/* II) Way Two - Preferred */}
      {formHasBeenSubmitted
        ?
          <h4 className="alert alert-success">
            Thank you for submitting the form!
          </h4>
        :
          <h4 className="alert alert-info">
            Welcome, please submit the form
          </h4>
      }
      <form onSubmit={handleOnSubmitCreateUser}>
        <div className="mb-3">
          <label className="form-label">Username: </label>
          <input
            type="text"
            name="username"
            value={usernameDetails.username}
            className="form-control"
            onChange={handleOnChangeUserDetails}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email Address: </label>
          <input
            type="email"
            name="email"
            value={usernameDetails.email}
            className="form-control"
            onChange={handleOnChangeUserDetails}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password: </label>
          <input
            type="password"
            name="password"
            value={usernameDetails.password}
            className="form-control"
            onChange={handleOnChangeUserDetails}
          />
        </div>

        <input type="submit" value="Create User" className="btn btn-primary" />
      </form>
    </div>
  );
};

export default UserFormOptimal;
