import logo from './logo.svg';
import './App.css';
import UserForm from './components/UserForm';
import UserFormOptimal from './components/UserFormOptimal';

function App() {
  return (
    <div className="container">
     {/* <UserForm /> */}
     <UserFormOptimal/>
    </div>
  );
}

export default App;
