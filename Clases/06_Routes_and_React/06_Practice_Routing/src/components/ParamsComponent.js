import React from "react";
import {useParams} from 'react-router-dom';

const ParamsComponent = (props) => {
  // ---------------------------------------------
  // I) VARIABLES & HOOKS
  // ---------------------------------------------


  const { wordOrNumber, fontColor, backgroundColor } = useParams();

  console.log("wordOrNumber: ", wordOrNumber);
  console.log("fontColor: ", fontColor);
  console.log("backgroundColor: ", backgroundColor);
  console.log((fontColor || backgroundColor) ? true : false);
  //-----------------------------------
  // III) JSX
  //-----------------------------------

  return (
    <div>
      {
        (isNaN(wordOrNumber)) // If the word param is not a number
          ? <p style={
              (fontColor && backgroundColor) ? {color: fontColor, backgroundColor: backgroundColor } : null
            }>
              The word is: {wordOrNumber}
            </p>
          : // Else, if the word param is a number
            <p> The number is: {wordOrNumber} </p>
      }
    </div>
  );
};

export default ParamsComponent;
