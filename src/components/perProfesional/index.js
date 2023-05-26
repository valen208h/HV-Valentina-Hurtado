import React from "react";

function Habilities(props){
    return(
      <div className='informacion--habilidades'>
        <h2>{props.Habilities}</h2>
        <p>{props.workGroup}</p>
        <p>{props.responsability}</p>
        <p>{props.collaboration}</p>
        
      </div>
    );
  }
const myInfoHabilities={
    Habilities:'PERFIL PROFESIONAL',
    linea1:'Poseo criterios de responsabilidad, perseverancia, competitividad y productividad,',
    linea2:'permitiendo forjar en mí un perfil de trabajo en equipo, cualidades que considero ',
    linea3:'indispensables en el ámbito laboral.'
  }

function CurriculumHabilities(props){
    return(
        <div>
            <Habilities
            Habilities={props.Habilities}
            workGroup={props.workGroup}
            responsability={props.responsability}
            collaboration={props.collaboration}
            />
        </div>
    );
}
function OfMainHabilities(){
    return(
        <div>
            <CurriculumHabilities
            Habilities={myInfoHabilities.Habilities}
            workGroup={myInfoHabilities.workGroup}
            responsability={myInfoHabilities.responsability}
            collaboration={myInfoHabilities.collaboration}
            />
        </div>
    );
}

export default OfMainHabilities;