import "./App.css";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <div className="container">
      <Wrapper
        items={[
          "something",
          "sombrero",
          "wholesome",
          "ransom",
          "apple",
          "react",
          "javascript",
        ]}
      />
    </div>
  );
}

export default App;
