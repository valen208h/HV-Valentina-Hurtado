import logo from './logo.svg';
import ImaMia from './components/imagenes/1000593544VALENTINAHURTADOPRADA.JPG'
import 'bootstrap/dist/css/bootstrap.min.css';
import PrimerParte from './components/PersonalInformation/index'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PerEstudiante from './components/PerEstudiante/index'
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



      <PrimerParte></PrimerParte>
      


      <div className= "Card">

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
        
    </div>
  );
}

export default App;
