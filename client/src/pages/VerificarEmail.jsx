import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import FormularioVerificarEmail from "../components/formularios/FormularioVerificarEmail";
import ContainerFormulario from "../components/ContainerFormulario";

const VerificarEmail = () => {
  return <ContainerFormulario children={<FormularioVerificarEmail />} />;
};

export default VerificarEmail;
