import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { FiCalendar } from "react-icons/fi";

const Cabecalho = ({ nomePagina }) => {
  const data = () => {
    const date = new Date();
    let dia = date.getDate();
    let mes = date.getMonth() + 1;
    let ano = date.getFullYear();

    let dataAtual = `${dia}-${mes}-${ano}`

    return dataAtual
  };

  return (
    <>
      <header className="d-flex flex-row align-items-center justify-content-between">
        <h2 className="fw-bolder">{nomePagina}</h2>
        <div className="d-flex flex-row p-2">
          <div className="d-flex flex-column">
            <p className="text-end fw-light">
              Data de Hoje
              <h5>{data()}</h5>
            </p>
          </div>
          <figure className="d-flex align-items-center ms-2">
            <FiCalendar size="2.5em" />
          </figure>
        </div>
      </header>
    </>
  );
};

export default Cabecalho;
