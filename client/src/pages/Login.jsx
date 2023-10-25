import React from "react";
import FormularioLogin from "../components/formularios/FormularioLogin";
import ContainerFormulario from "../components/ContainerFormulario";

const Login = () => {
  return <ContainerFormulario children={<FormularioLogin />} />
};

export default Login;
