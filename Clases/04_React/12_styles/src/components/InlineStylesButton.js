import React, { useState } from "react";

const InlineStylesButton = (props) => {
  // ---------------------------------------------
  // I) VARIABLES & HOOKS
  // ---------------------------------------------
  const { text } = props;
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const inlineStyleButton = {
    display: "inline-block",
    padding: "10px 20px",
    backgroundColor: isActive ? '#6c63ff' : isHovered ? '#8a85ff' : '#a79bff',
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  // ---------------------------------------------
  // II) HANDLERS & AUX FUNCTIONS
  // ---------------------------------------------

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  const handleMouseDown = () => {
    setIsActive(true);
  };

  const handleMouseUp = () => {
    setIsActive(false);
  };

  // ---------------------------------------------
  // III) JSX
  // ---------------------------------------------
  return (
    <div className="w-50 mt-4 mx-auto">
      <button
        style={inlineStyleButton}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        {text}
      </button>
    </div>
  );
};

export default InlineStylesButton;
