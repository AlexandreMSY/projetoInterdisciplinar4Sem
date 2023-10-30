import React from "react";
import FormularioLogin from "../components/formularios/telaLogin/FormularioLogin";
import ContainerFormulario from "../components/ContainerFormulario";
import { useAuthUser } from "react-auth-kit";
import { Navigate } from "react-router-dom";
//import { Redirect } from "react-router-dom";

const Login = () => {
  const auth = useAuthUser();

  return (
    <>
      {JSON.stringify(auth())}
      {auth() ? (
        <Navigate to="agenda/inicio"/>
      ) : (
        <ContainerFormulario children={<FormularioLogin />} />
      )}
    </>
  );
};

export default Login;
