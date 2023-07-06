import React, { useState } from "react";

const MovieForm = (props) => {
  // ---------------------------------------------
  // I) VARIABLES & HOOKS
  // ---------------------------------------------
  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState("");
  const [movieTitleCreated, setMovieTitleCreated] = useState(false);

  // ---------------------------------------------
  // II) HANDLERS & AUX FUNCTIONS
  // ---------------------------------------------

  const handleOnChangeMovieTitle = (e) => {
    setTitle(e.target.value);
    if (e.target.value.length < 1) {
      setTitleError("Title is required!");
    } else if (e.target.value.length < 3) {
      setTitleError("Title must be 3 characters or longer!");
    } else {
      setTitleError("");
    }
    setMovieTitleCreated(false);
  };

  const handleOnSubmitMovieForm = (e) => {
    e.preventDefault(); // Prevents the default behavior of the submit button in form
    // (which is to refresh the page)
    setMovieTitleCreated(true);
  };
  // ---------------------------------------------
  // III) JSX
  // ---------------------------------------------
  return (
    <div className="w-50 mt-4 mx-auto">
      <h1>Movie Form</h1>
      <form onSubmit={handleOnSubmitMovieForm} className="mb-3">
        <div className="mb-3">
          <label htmlFor="titleInput" className="form-label">
            Title:
          </label>
          <input
            type="text"
            className={`form-control ${titleError ? "is-invalid" : ""}`}
            id="titleInput"
            onChange={handleOnChangeMovieTitle}
          />
          {titleError && <div className="invalid-feedback">{titleError}</div>}
        </div>
        <button type="submit" className="btn btn-primary">
          Create Movie
        </button>
      </form>
      {movieTitleCreated ? (
        <p className="alert alert-success">{title} was created!</p>
      ) : (
        ""
      )}
    </div>
  );
};

export default MovieForm;
