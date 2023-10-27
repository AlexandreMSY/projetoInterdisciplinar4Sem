import React from "react";
import FormularioVerificarEmail from "../components/formularios/telaLogin/FormularioVerificarEmail"
import ContainerFormulario from "../components/ContainerFormulario";

const VerificarEmail = () => {
  return <ContainerFormulario children={<FormularioVerificarEmail />} />;
};

export default VerificarEmail;
