import React from "react";
import { useNavigate } from "react-router-dom";

const Results = (props) => {
  // ---------------------------------------------
  // I) VARIABLES & HOOKS
  // ---------------------------------------------
  const { surveyResults, setSurveyResults } = props;
  const navigate = useNavigate();

  // ---------------------------------------------
  // II) HANDLERS & AUX FUNCTIONS
  // ---------------------------------------------

  const handleOnClickGoBack = (e) => {
    setSurveyResults({
      username: "",
      comment: "",
    });
    navigate("/");
  };

  // ---------------------------------------------
  // III) JSX
  // ---------------------------------------------
  return (
    <div>
      <h1>Results</h1>
      <p>
        <strong>Username:</strong> {surveyResults.username}
      </p>
      <p>
        <strong>Comment:</strong> {surveyResults.comment}
      </p>
      <button className="btn btn-primary" onClick={handleOnClickGoBack}>
        Go Back
      </button>
    </div>
  );
};

export default Results;
