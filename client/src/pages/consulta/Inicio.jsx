import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { FiCalendar } from "react-icons/fi";
import Cabecalho from "../../components/consulta/Cabecalho";
import ProximasConsultasSemana from "../../components/consulta/ProximasConsultasSemana";
import BemVindoInicio from "../../components/consulta/BemVindoInicio";

const Inicio = () => {
  return (
    <>
      <div className="d-flex flex-column gap-4 vh-100" style={{backgroundColor: "#F5F7F8"}}>
        <Cabecalho nomePagina="Início"/>
        <BemVindoInicio />
        <ProximasConsultasSemana />
      </div>
    </>
  );
};

export default Inicio;
