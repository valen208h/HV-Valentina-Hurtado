import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';


function Formulario(props) {
  return (
    <div className="ultimo--contenedor">
        <div className="row">
            <div className="col-12">
                <form id="contact-form" name="contact-form" action="mail.php" method="POST">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="titulo--global">{props.title}</h1>
                    </div>
                    <div className="col-md-6">
                    <div className="md-form mb-0">
                        <input type="text" id="name" name="name" className="form-control" placeholder={props.ejeNom} />
                        <label htmlFor="name">
                        <h4 className="titulo--global">{props.YourName}</h4>
                        </label>
                    </div>
                    </div>
                    <div className="col-md-6">
                    <div className="md-form mb-0">
                        <input type="text" id="email" name="email" className="form-control" placeholder={props.ejeCorreo} />
                        <label htmlFor="email">
                        <h4 className="titulo--global">{props.YourEmail}</h4>
                        </label>
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                    <div className="md-form mb-0">
                        <input type="text" id="subject" name="subject" className="form-control" />
                        <label htmlFor="subject">
                        <h4 className="titulo--global">{props.subject}</h4>
                        </label>
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                    <div className="md-form">
                        <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                        <label htmlFor="message">
                        <h4 className="titulo--global">{props.message}</h4>
                        </label>
                    </div>
                    </div>
                </div>
                </form>
                <div>
                <Button variant="outline-success">
                    <a onClick={() => document.getElementById("contact-form").submit()}>
                    <   h4 className="titulo--global">{props.send}</h4>   
                    </a> 
                </Button>
                </div>
                <div className="status"></div>
            </div>
        </div>
    </div>
  );
}

const formularioInfo ={
    title:'FORMULARIO',
    ejeNom:'Ej. Valentina Hurtado Prada',
    ejeCorreo:'valen.2802@gmail.com',
    YourName:'Nombre Completo',
    YourEmail:'Correo',
    message:'Escribe un mensaje',
    subject:'Objetivo',
    send:'Enviar'
}

function VistaFormulario(props) {
    return(
        <div>
            <Formulario
            title={props.title}
            ejeNom={props.ejeNom}
            ejeCorreo={props.ejeCorreo}
            YourName={props.YourName}
            YourEmail={props.YourEmail}
            message={props.message}
            subject={props.subject}
            send={props.send} 
            />
        </div>
    );
}

function PrincipalFormulario(){
    return(
        <div>
            <VistaFormulario
            title={formularioInfo.title}
            ejeNom={formularioInfo.ejeNom}
            ejeCorreo={formularioInfo.ejeCorreo}
            YourName={formularioInfo.YourName}
            YourEmail={formularioInfo.YourEmail}
            message={formularioInfo.message}
            send={formularioInfo.send}
            subject={formularioInfo.subject}
            />
        </div>
    );
}

export default PrincipalFormulario;