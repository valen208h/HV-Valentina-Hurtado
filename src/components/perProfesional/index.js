import React from "react";

function Habilities(props){
  return(
    <div className='informacion--habilidades'>
      <h2>{props.Habilities}</h2>
      <p>{props.linea1}</p>
      <p>{props.linea2}</p>
      <p>{props.linea3}</p>
      <p>{props.linea4}</p>
      <p>{props.linea5}</p>
      <p>{props.linea6}</p>
    </div>
  );
  }
const myInfoHabilities={
  Habilities:'PERFIL PROFESIONAL',
  linea1:'Poseo criterios de responsabilidad, perseverancia, competitividad y productividad,',
  linea2:'permitiendo forjar en mí un perfil de trabajo en equipo, cualidades que considero ',
  linea3:'indispensables en el ámbito laboral.',
  linea4:'Por mi formación académica cuento con amplios conocimientos teóricos y prácticos en',
  linea5:'conocimientos de Python, javascript, html, css, reactjs,Bases de datos, entre otros.',
  linea6:'con disponibilidad de seguir aprendiendo y trabajar'
  }

function CurriculumHabilities(props){
  return(
    <div>
      <Habilities
      Habilities={props.Habilities}
      linea1={props.linea1}
      linea2={props.linea2}
      linea3={props.linea3}
      linea4={props.linea4}
      linea5={props.linea5}
      linea6={props.linea6}
      
      />
    </div>
  );
}
function OfMainHabilities(){
  return(
    <div>
      <CurriculumHabilities
      Habilities={myInfoHabilities.Habilities}
      linea1={myInfoHabilities.linea1}
      linea2={myInfoHabilities.line2}
      linea3={myInfoHabilities.linea3}
      linea4={myInfoHabilities.linea4}
      linea5={myInfoHabilities.linea5}
      linea6={myInfoHabilities.linea6}

      />
    </div>
  );
}

export default OfMainHabilities;