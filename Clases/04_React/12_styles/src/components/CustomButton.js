import React, { useState } from "react";
// import "../styles/my_button.css";
import styles from "../styles/my_button.module.css";

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
      <button className={styles.my_button} >
        {text}
      </button>
    </div>
  );
};

export default CustomButton;
