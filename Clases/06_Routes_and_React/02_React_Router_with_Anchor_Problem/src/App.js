import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Counter from "./components/Counter";

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
        <h1>Routing Example With Anchor - Problem</h1>

        {/* I) Create a simple navigation */}
        <nav className="d-flex justify-content-center my-3">
          <a href="/"><h4>Home</h4></a>
          <h4 className="mx-2"> | </h4>
          <a href="/about"><h4>About</h4></a>
          <h4 className="mx-2"> | </h4>
          <a href="/contact"><h4>Contact</h4></a>
        </nav>

        <Counter/>
        <br/>

        {/* II) Create the routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
