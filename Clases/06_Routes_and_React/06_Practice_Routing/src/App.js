import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./components/Home";
import ParamsComponent from "./components/ParamsComponent";

const App = () => {
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
    <BrowserRouter>
      <div className="App bg-light p-3 text-center">
        <Routes>
          {/* /home is a 'hard path'. No params passed */}
          <Route path="/home" element={<Home />} />
          {/* /:wordOrNumber is a 'dynamic path'. Params passed */}
          <Route path="/:wordOrNumber" element={<ParamsComponent />} />
          {/* /:wordOrNumber/:fontColor/:backgroundColor is a 'dynamic path'. Params passed */}
          <Route
            path="/:wordOrNumber/:fontColor/:backgroundColor"
            element={<ParamsComponent />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
