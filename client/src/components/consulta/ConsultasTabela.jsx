import React, { useState, useEffect } from "react";
import { useAuthUser } from "react-auth-kit";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import requisicaoGet from "../../utils/apiFetch/requisicaoGet";
import { FiTrash2, FiEdit3 } from "react-icons/fi";
import consultaContext from "../../context/ConsultaContext";
import ContainerConsultas from "../../pages/consulta/ContainerConsultas";
import configData from "../../../configData.json"

const ConsultasTabela = ({ onClickEditar, onClickApagar }) => {
  const auth = useAuthUser();
  const [consultas, setConsultas] = useState([]);

  const obterConsultas = async () => {
    const idUsuarioLogado = auth().usuario_id;
    const resposta = await requisicaoGet(
      `${configData}/api/consulta/${idUsuarioLogado}`
    );

    setConsultas(resposta.consultas);
  };

  useEffect(() => {
    obterConsultas();
  }, []);

  return (
    <>
      <table className="table border table-striped table-bordered border">
        <thead>
          <tr>
            <th scope="col" className="text-white bg-primary fs-5">
              Especialidade
            </th>
            <th scope="col" className="text-white bg-primary fs-5">
              Data
            </th>
            <th scope="col" className="text-white bg-primary fs-5">
              Hora
            </th>
            <th scope="col" className="text-white bg-primary fs-5"></th>
          </tr>
        </thead>
        <tbody>
          {consultas.map((item) => {
            const data = new Date(item.data_hora);
            const dataIsoString = data
              .toISOString()
              .slice(0, 19)
              .replace("T", " ");
            const hora = dataIsoString.slice(11);
            const dia = data.toISOString().slice(0, 10);

            return (
              <tr key={item.consulta_id}>
                <td>{item.especialidade}</td>
                <td>{dia}</td>
                <td>{hora}</td>
                <td className="d-flex flex-row gap-3 justify-content-center">
                  <button
                    className="d-flex align-items-center gap-2 btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#modalEditar"
                    onClick={() => {
                      consultaContext.consulta_id = item.consulta_id
                      consultaContext.especialidade = item.especialidade;
                      consultaContext.data = dia
                      consultaContext.hora = hora
                      consultaContext.observacoes = item.observacoes
                    }}
                  >
                    Editar
                    <FiEdit3 />
                  </button>
                  <button
                    className="d-flex align-items-center gap-2 btn btn-danger"
                    data-bs-toggle="modal"
                    data-bs-target="#modalApagar"
                    onClick={() => {
                      consultaContext.consulta_id = item.consulta_id
                    }}
                  >
                    Apagar
                    <FiTrash2 />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ConsultasTabela;
