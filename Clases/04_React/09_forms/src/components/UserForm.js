import React, { useState } from "react";

const UserForm = (props) => {
  // ---------------------------------------------
  // I) VARIABLES & HOOKS
  // ---------------------------------------------
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // ---------------------------------------------
  // II) HANDLERS & AUX FUNCTIONS
  // ---------------------------------------------

  const createUser = (e) => {
    e.preventDefault(); // Prevents the default behavior of the submit button in form
    // (which is to refresh the page)
    const newUser = { username, email, password };
    // Console log the new user
    console.log("Welcome", newUser);
    // Reset States
    setUsername("");
    setEmail("");
    setPassword("");
  };

  // ---------------------------------------------
  // III) JSX
  // ---------------------------------------------
  return (
    <div className="w-50 mt-4 mx-auto">
      <h1>Create User Form</h1>
      <form onSubmit={createUser}>
        <div className="mb-3">
          <label className="form-label">Username: </label>
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email Address: </label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password: </label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <input type="submit" value="Create User" className="btn btn-primary" />
      </form>
    </div>
  );
};

export default UserForm;
