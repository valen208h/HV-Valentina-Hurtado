// se importa la libreria de react
import React from "react";
// La funcion del componente

function PerEstudiante(props) {
    return (

      <div className='per--Estudiante'>
        <h1>{props.carrera}</h1>
      </div>
    );
}
const myInfo = {
    carrera: 'Estudiante sexto semestre de ingenieria de sistemas y telecomunicaciones'
  };


function HojaVidaInformation(props) {
    return(
      <div>
        <PerEstudiante
          carrera={props.carrera}
        />
      </div>
    );
  }

function PrincipalCarre(){
    return(
        <div>
            <HojaVidaInformation
            carrera={myInfo.carrera}
            />
        </div>
    );
}

export default PrincipalCarre;