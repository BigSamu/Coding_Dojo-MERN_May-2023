import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import Results from "./components/Results";
import Survey from "./components/Survey";

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
        <h1>useNavigate Example</h1>
        <hr />
        {/*Create the routes */}
        
      </div>
    </BrowserRouter>
  );
};

export default App;
