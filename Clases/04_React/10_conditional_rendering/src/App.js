import logo from "./logo.svg";
import "./App.css";
import UserFormOptimal from "./components/UserFormOptimal";
import MovieForm from "./components/MovieForm";

function App() {
  return (
    <div className="container">
      <UserFormOptimal />
      <hr />
      <MovieForm />
    </div>
  );
}

export default App;
