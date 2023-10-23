import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import FormularioNovaSenha from "../components/formularios/FormularioNovaSenha";
import ContainerFormulario from "../components/ContainerFormulario";

const NovaSenha = () => {
  return <ContainerFormulario children={<FormularioNovaSenha />} />;
};

export default NovaSenha;
