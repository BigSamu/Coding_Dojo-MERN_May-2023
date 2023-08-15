import React, {useContext} from "react";
import CounterContext from "../contexts/CounterContext";

const DecrementButton = (props) => {

  // --------------------------------------------------
  // I) HOOKS AND VARIABLES
  // --------------------------------------------------
  const { state, dispatch } = useContext(CounterContext);

  // --------------------------------------------------
  // II) HANDLERS
  // --------------------------------------------------
  const decrement = () => {
    dispatch({ type: "DECREMENT" });
  };

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
