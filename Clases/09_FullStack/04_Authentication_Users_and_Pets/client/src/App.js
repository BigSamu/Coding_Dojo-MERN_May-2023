import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import LogRegPage from "./views/LogRegPage";
import HomePage from "./views/HomePage";
import DetailsPage from "./views/DetailsPage";
import CreatePage from "./views/CreatePage";
import UpdatePage from "./views/UpdatePage";
import NavBar from "./components/NavBar";

// **************************************************************************
// A) AUXILIARY COMPONENT
// **************************************************************************
const ProtectedRoute = (props) => {
  // Variables from Props
  const { user, redirectPath = "/login", children } = props;

  // II) JSX
  return <>{!user ? <Navigate to={redirectPath} replace /> : children}</>;
};

// **************************************************************************
// B) MAIN COMPONENT
// **************************************************************************

const App = () => {
  // --------------------------------------------------
  // I) HOOKS AND VARIABLES
  // --------------------------------------------------

  // State Hooks
  const [user, setUser] = useState(null);

  // --------------------------------------------------
  // II) JSX
  // --------------------------------------------------
  return (
    <div className="App">
      <NavBar />
      <div className="p-3 container">
        <Routes>
          <Route path="/login" element={<LogRegPage />} />
          <Route
            path="/"
            element={
              <ProtectedRoute user={user}>
                <HomePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/pets/new"
            element={
              <ProtectedRoute user={user}>
                <CreatePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/pets/:petId"
            element={
              <ProtectedRoute user={user}>
                <DetailsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/pets/:petId/edit"
            element={
              <ProtectedRoute user={user}>
                <UpdatePage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
