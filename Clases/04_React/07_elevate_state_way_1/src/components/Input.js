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
    let newfilterValue = e.target.value;
    console.log("newfilterValue: ", newfilterValue);
    setFilter(newfilterValue);
  };

  // ---------------------------------------------
  // III) JSX
  // ---------------------------------------------
  return (
    <>
      <input
        name="filter keys"
        value={filter}
        onChange={handleOnChange}
      />
    </>
  );
};

export default Input;
