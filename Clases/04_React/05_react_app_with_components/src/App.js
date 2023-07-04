import "./App.css";
import Title from "./components/Title";
import PersonCard from "./components/PersonCard";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      {/* I) React Component */}
      <Title />

      <hr className="border border-primary"/>

      {/* II) React Component passing Props */}
      <PersonCard
        firstName="Jane"
        lastName="Doe"
        age={45}
        hairColor="Black"
      />
      <PersonCard
        firstName="Millard"
        lastName="Fillmore"
        age={50}
        hairColor="Brown"
      >
        <p> Millard is a React wizard!</p>
      </PersonCard>
      <PersonCard
        firstName="Maria"
        lastName="Smith"
        age={62}
        hairColor="Brown"
      >
        <p>Maria is a React Wizard</p>
        <p>She is also a mother of two</p>
      </PersonCard>

      <hr className="border border-primary"/>

      {/* III) Events */}
      <Button text="Click me" />
    </div>
  );
}

export default App;
