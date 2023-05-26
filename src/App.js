import logo from './logo.svg';
import ImaMia from './components/imagenes/1000593544VALENTINAHURTADOPRADA.JPG'
import 'bootstrap/dist/css/bootstrap.min.css';
import PrimerParte from './components/PersonalInformation/index'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PerEstudiante from './components/PerEstudiante/index'
import Formulario from './components/Formulario/index'
import './App.css';


function App() {
  return (
    <div className="App">
      <div className="App-cuadro">
        <div class = "row">
          <div class = "col-3">
            <img src={ImaMia} className="App-cuadro--ImaMia" alt="fotoValentina" width="50%"/>
          </div>
          <div class = "col-1"></div>
          <div class = "col-4 App-cuadro--perEstudiante">
            <PerEstudiante></PerEstudiante>
          </div>
          <div class = "col-1"></div>
          <div class = "col-3">
            <img src={logo} className="App-logo" alt="logo"  width="100%"/>
          </div>
        </div>
      </div>
      <div class ="App-segunda">
    
        <div class = "row">
          <div class = "col-6 App-segunda-informacion">
            <PrimerParte></PrimerParte>
          </div>
          
        </div>
        
      </div>
      <Formulario></Formulario>
      
      
    </div>   
    
  );
}

export default App;
