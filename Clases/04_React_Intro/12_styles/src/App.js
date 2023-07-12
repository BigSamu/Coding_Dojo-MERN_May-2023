
import React from "react";
import NormalButton from "./components/NormalButton";
import CustomButton from "./components/CustomButton";
import InlineStylesButton from "./components/InlineStylesButton";

function App() {
  return (
    <div className="container">
      <NormalButton text="Normal Button"/>
      <CustomButton text="Custom Button"/>
      <InlineStylesButton text = "Inline Style Button"/>
    </div>
  );
}

export default App;
