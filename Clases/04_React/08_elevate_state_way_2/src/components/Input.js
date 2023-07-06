import React from "react";

const Input = (props) => {
  // ---------------------------------------------
  // I) VARIABLES & HOOKS
  // ---------------------------------------------
  const { filter, setFilter } = props;

  // ---------------------------------------------
  // II) HANDLERS AND AUX FUNCTIONS
  // ---------------------------------------------
  const handleOnChange = (e) => {
    setFilter(e.target.value);
  };
  // ---------------------------------------------
  // III) JSX
  // ---------------------------------------------
  return (
    <>
      <input value={filter} onChange={handleOnChange} />
    </>
  );
};

export default Input;
