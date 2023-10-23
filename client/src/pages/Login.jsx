import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import FormularioLogin from "../components/formularios/FormularioLogin";
import ContainerFormulario from "../components/ContainerFormulario";

const Login = () => {
  return (
    <>
      <ContainerFormulario children={<FormularioLogin />} />
    </>
  );
};

export default Login;
