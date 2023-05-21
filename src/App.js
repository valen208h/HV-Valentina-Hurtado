import logo from './logo.svg';
import './App.css';
import Fooder from './components/fooder/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/header/index';
import PrimerParte from './components/PersonalInformation/index'

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Navbar></Navbar>
      </header>
      <Fooder className="hola">

      </Fooder>
      <PrimerParte></PrimerParte>
      
    </div>
  );
}

export default App;
