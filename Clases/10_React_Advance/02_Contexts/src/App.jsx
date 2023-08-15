import React, {useState} from "react";

import IncrementButton from "./components/IncrementButton";
import DecrementButton from "./components/DecrementButton";
import DisplayCounter from "./components/DisplayCounter";

function App() {


  return (
    <div className="vh-100">
      <div className="d-flex justify-content-center align-items-center h-100">
        <div className="border border-2 border-secondary p-5 bg-light">
          <h1 className="text-center"> Counter App</h1>
          <IncrementButton/>
          <DecrementButton/>
          <DisplayCounter/>
        </div>
      </div>
    </div>
  );
}

export default App;
