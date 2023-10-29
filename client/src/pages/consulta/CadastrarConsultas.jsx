import React, { useEffect, useState } from "react";
import Cabecalho from "../../components/consulta/Cabecalho";
import FormularioCadastroConsulta from "../../components/formularios/consultas/FormularioCadastroConsulta";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import ContainerConsultas from "./ContainerConsultas";

const CadastrarConsultas = () => {
  return (
    <>
      <div
        className="d-flex flex-column gap-4 vh-100"
        style={{ backgroundColor: "#F5F7F8" }}
      >
        <Cabecalho nomePagina="Cadastrar Consulta" />
        <FormularioCadastroConsulta />
      </div>
    </>
  );
};

export default CadastrarConsultas;
