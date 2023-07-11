import React, { useState } from "react";

const CustomButton = (props) => {
  // ---------------------------------------------
  // I) VARIABLES & HOOKS
  // ---------------------------------------------
  const { text } = props;
  // ---------------------------------------------
  // II) HANDLERS & AUX FUNCTIONS
  // ---------------------------------------------

  // ---------------------------------------------
  // III) JSX
  // ---------------------------------------------
  return (
    <div className="w-50 mt-4 mx-auto">
      <button className="my_button">
        {text}
      </button>
    </div>
  );
};

export default CustomButton;
