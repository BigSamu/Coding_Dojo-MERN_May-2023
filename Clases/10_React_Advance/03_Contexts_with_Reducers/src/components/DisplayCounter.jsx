import React, { useContext } from "react";
import CounterContext from "../contexts/CounterContext";

const DisplayCounter = (props) => {
  // --------------------------------------------------
  // I) HOOKS AND VARIABLES
  // --------------------------------------------------
  const { state } = useContext(CounterContext);

  // --------------------------------------------------
  // II) JSX
  // --------------------------------------------------
  return (
    <>
      <div className="p-1 d-flex flex-column justify-content-center">
        <div className="alert alert-info m-0">Counter Value: {state.count}</div>
        <p className="small text-danger m-0 p-0">{state.message}</p>
      </div>
    </>
  );
};

export default DisplayCounter;
