import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import ConsultasTabela from "../../components/consulta/ConsultasTabela";
import ContainerConsultas from "./ContainerConsultas";
import Cabecalho from "../../components/consulta/Cabecalho";
import ModalEditar from "../../components/consulta/suasConsultas/ModalEditar";
import consultaContext from "../../context/ConsultaContext";
import ModalApagar from "../../components/consulta/suasConsultas/ModalApagar";

const SuasConsultas = () => {
  const [popUp, setPopUp] = useState(false);

  return (
    <>
      <div
        className="position-relative d-flex flex-column gap-4 vh-100"
        style={{ backgroundColor: "#F5F7F8" }}
      >
        <Cabecalho nomePagina="Suas Consultas" />
        <ConsultasTabela />
        <ModalEditar />
        <ModalApagar />
      </div>
    </>
  );
};

export default SuasConsultas;
