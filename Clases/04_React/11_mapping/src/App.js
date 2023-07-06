import logo from "./logo.svg";
import "./App.css";
import FruitTable from "./components/FruitTable";

function App() {
  // ---------------------------------------------
  // I) VARIABLES & HOOKS
  // ---------------------------------------------

  const fruits = [
    { name: "Apple", price: 1.99 },
    { name: "Orange", price: 0.99 },
    { name: "Banana", price: 0.49 },
  ];

  // ---------------------------------------------
  // II) JSX
  // ---------------------------------------------
  return (
    <div className="container">
      <FruitTable fruits={fruits} />
    </div>
  );
}

export default App;
