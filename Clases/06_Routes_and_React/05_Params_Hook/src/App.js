import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Blog from "./components/Blog";
import BlogList from "./components/BlogList";

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
        <h1>useParams Example</h1>
        <hr />
        {/* Create the routes */}

        
      </div>
    </BrowserRouter>
  );
};

export default App;
