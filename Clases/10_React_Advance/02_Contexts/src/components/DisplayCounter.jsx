import React, {useContext} from "react";
import CounterContext from "../contexts/CounterContext";

const DisplayCounter = (props) => {

  // --------------------------------------------------
  // I) HOOKS AND VARIABLES
  // --------------------------------------------------
  const {count} = useContext(CounterContext);

  // --------------------------------------------------
  // II) JSX
  // --------------------------------------------------
  return (
    <div className="p-1 d-flex justify-content-center">
      <div className="alert alert-info">Counter Value: {count}</div>
    </div>
  );
};

export default DisplayCounter;
