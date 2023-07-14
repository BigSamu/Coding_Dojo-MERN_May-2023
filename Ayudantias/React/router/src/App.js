import logo from './logo.svg';
import './App.css';
import { Link, useNavigate } from 'react-router-dom';

function App() {
  
  const navigate = useNavigate();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <button onClick={()=>{
          navigate("/perfil/detalle")
        }}>
          Vamos a perfil
        </button>
        <Link 
          to='/perfil'>
          Ir a perfil
        </Link>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
