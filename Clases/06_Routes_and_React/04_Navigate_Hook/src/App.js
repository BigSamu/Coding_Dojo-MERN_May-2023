import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

import Results from "./components/Results";
import Survey from "./components/Survey";

const App = () => {
  // ---------------------------------------------
  // I) VARIABLES & HOOKS
  // ---------------------------------------------

  const [surveyResults, setSurveyResults] = useState({
    username: "",
    comment: ""
  });
  // ---------------------------------------------
  // II) HANDLERS & AUX FUNCTIONS
  // ---------------------------------------------

  // ---------------------------------------------
  // III) JSX
  // ---------------------------------------------
  return (
    <div className="App bg-light p-3 text-center">
      <h1>useNavigate Example</h1>
      <hr />
      {/*Create the routes */}
      <Routes>
        <Route
          path="/"
          element={
            <Survey
              surveyResults={surveyResults}
              setSurveyResults={setSurveyResults}
            />
          }
        />
        <Route
          path="/results"
          element={<Results surveyResults={surveyResults} setSurveyResults={setSurveyResults} />}
        />
      </Routes>
    </div>
  );
};

export default App;
