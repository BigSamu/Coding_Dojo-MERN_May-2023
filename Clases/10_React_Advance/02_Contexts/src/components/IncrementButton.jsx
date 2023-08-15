import React, {useContext} from "react";
import CounterContext from "../contexts/CounterContext";

const IncrementButton = (props) => {

  // --------------------------------------------------
  // I) HOOKS AND VARIABLES
  // --------------------------------------------------
  const { increment } = useContext(CounterContext);

  // --------------------------------------------------
  // II) JSX
  // --------------------------------------------------
  return (
    <div className="p-1 d-flex justify-content-center">
      <button className="btn btn-success" onClick={increment}>
        Increment
      </button>
    </div>
  );
};

export default IncrementButton;
