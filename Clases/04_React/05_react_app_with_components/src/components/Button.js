import React from "react";

const Button = (props) => {
  return (
    <div class="d-flex justify-content-center">
      <button
        className="btn btn-primary"
        onClick={() => alert("This button has been clicked")}
      >
        {props.text}
      </button>
    </div>
  );
};

export default Button;
