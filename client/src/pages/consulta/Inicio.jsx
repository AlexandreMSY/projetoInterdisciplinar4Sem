import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { FiCalendar } from "react-icons/fi";
import Cabecalho from "../../components/consulta/Cabecalho";
import ProximasConsultasSemana from "../../components/consulta/ProximasConsultasSemana";
import BemVindoInicio from "../../components/consulta/BemVindoInicio";
import ContainerConsultas from "./ContainerConsultas";

const Inicio = () => {
  return (
    <>
      <ContainerConsultas>
        <Cabecalho nomePagina="Início" />
        <BemVindoInicio />
        <ProximasConsultasSemana />
      </ContainerConsultas>
    </>
  );
};

export default Inicio;
