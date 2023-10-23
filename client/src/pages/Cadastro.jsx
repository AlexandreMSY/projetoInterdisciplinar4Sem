import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import FormularioCadastro from "../components/formularios/FormularioCadastro";
import ContainerFormulario from "../components/ContainerFormulario";

const Cadastro = () => {
  return (
    <>
      <ContainerFormulario children={<FormularioCadastro />} />
    </>
  );
};

export default Cadastro;
