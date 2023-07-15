import React from "react";
import { useNavigate } from "react-router-dom";

const Survey = (props) => {
  // ---------------------------------------------
  // I) VARIABLES & HOOKS
  // ---------------------------------------------
  const { surveyResults, setSurveyResults } = props;
  const navigate = useNavigate();
  // ---------------------------------------------
  // II) HANDLERS & AUX FUNCTIONS
  // ---------------------------------------------

  const handleOnChangeSurveyResults = (e) => {
    // let surveyResultsToUpdate = { ...surveyResults };
    // let { name, value } = e.target;
    // surveyResultsToUpdate[name] = value;
    // setSurveyResults(surveyResultsToUpdate)

    // Above same as:
    setSurveyResults({ ...surveyResults, [e.target.name]: e.target.value });
  };

  const handleOnSubmitSurvey = (e) => {
    e.preventDefault();
    console.log("Survey Submitted");
    navigate("/results");
  };

  // ---------------------------------------------
  // III) JSX
  // ---------------------------------------------

  return (
    <div className="container mt-4 w-50">
      <form onSubmit={handleOnSubmitSurvey}>
        <div className="form-group my-4">
          <label htmlFor="nameInput">Your Name:</label>
          <input
            type="text"
            id="nameInput"
            className="form-control"
            onChange={handleOnChangeSurveyResults}
            name="username"
            value={surveyResults.name}
          />
        </div>
        <div className="form-group my-4">
          <label htmlFor="commentInput">Your Comment:</label>
          <textarea
            id="commentInput"
            className="form-control"
            onChange={handleOnChangeSurveyResults}
            name="comment"
            value={surveyResults.comment}
          ></textarea>
        </div>
        <div className="my-4">
          <button type="submit" className="btn btn-primary">
            Submit Survey
          </button>
        </div>
      </form>
    </div>
  );
};

export default Survey;
