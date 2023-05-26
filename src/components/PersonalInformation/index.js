// se importa la libreria de react
import React from "react";
// La funcion del componente

function PerInformation(props) {
    return (

      <div className='personal--information'>
        
        <h3>{props.name}</h3>
        <p>{props.email}</p>
        <p>{props.phone}</p>
        <p>{props.address}</p>
        <p>{props.ownDescription}</p>
      </div>
    );
}
const myInfo = {
    name: 'Contactame',
    address: 'Manizalez-Caldas-Colombia',
    email: 'valen.2802@gmail.com',
    phone: '322-536-8295',
    ownDescription: 'Soy una persona responsable, que se interesa por aprender nuevos conceptos, que trabaja bien con las demas personas y esta dispuesta a compartir conocimientos'
  };


function HojaVidaInformation(props) {
    return(
      <div>
        <PerInformation
          name={props.name}
          address={props.address}
          email={props.email}
          phone={props.phone}
          ownDescription={props.ownDescription}
        />
      </div>
    );
  }

function principalInfo(){
    return(
        <div>
            <HojaVidaInformation
            name={myInfo.name}
            address={myInfo.address}
            email={myInfo.email}
            phone={myInfo.phone}
            ownDescription={myInfo.ownDescription}
            />
        </div>
    );
}

export default principalInfo;


