import "./App.css";
import Wrapper from "./components/Wrapper";

const App = () => {

  // ---------------------------------------------
  // I) VARIABLES & HOOKS
  // ---------------------------------------------

  const items = [
    "something",
    "sombrero",
    "wholesome",
    "ransom",
    "apple",
    "react",
    "javascript",
  ]
  // ----------------------------------------
  // III) JSX
  // ----------------------------------------
  return (
    <div className="container">
      <Wrapper
        items={items}
      />
    </div>
  );
}

export default App;
