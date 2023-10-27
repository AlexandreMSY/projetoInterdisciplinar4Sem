import React, { useContext } from "react";
import FormularioNovaSenha from "../components/formularios/telaLogin/FormularioNovaSenha";
import ContainerFormulario from "../components/ContainerFormulario";
import state from "../context/EmailContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const NovaSenha = () => {
  return (
    <ContainerFormulario
      children={
        state.emailVerificado ? (
          <FormularioNovaSenha />
        ) : (
          <>
            <div className="d-flex justify-content-center align-items-center">
              <h1>Email não Verificado</h1>
            </div>
          </>
        )
      }
    />
  );
};

export default NovaSenha;
