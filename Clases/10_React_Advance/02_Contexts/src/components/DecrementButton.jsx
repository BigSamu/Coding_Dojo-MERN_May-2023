import React, {useContext} from "react";
import CounterContext from "../contexts/CounterContext";

const DecrementButton = (props) => {

  // --------------------------------------------------
  // I) HOOKS AND VARIABLES
  // --------------------------------------------------
  const { decrement } = useContext(CounterContext);

  // --------------------------------------------------
  // II) JSX
  // --------------------------------------------------
  return (
    <div className="p-1 d-flex justify-content-center">
      <button className="btn btn-danger" onClick={decrement}>
        Decrement
      </button>
    </div>
  );
};

export default DecrementButton;
