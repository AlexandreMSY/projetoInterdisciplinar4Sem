import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import consultaContext from "../../../context/ConsultaContext";
import { useSnapshot } from "valtio";
import { useAuthUser } from "react-auth-kit";
import { useNavigate } from "react-router-dom";
import dataContext from "../../../context/DataContext";
import configData from "../../../../configData.json"

const ModalApagar = () => {
  const snap = useSnapshot(consultaContext);
  const auth = useAuthUser();
  const { consulta_id } = snap;
  const [input, setInput] = useState(consultaContext);
  const [mensagem, setMensagem] = useState("");

  const pegarValorInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInput((values) => ({ ...values, [name]: value }));
  };

  const apagarConsulta = async () => {
    const corpoRequisicao = {
      usuario: {
        senha: input.senhaApagar,
        email: auth().email,
      },
      consulta_id: consulta_id,
    };

    const requisicao = await fetch(
      `${configData.API_URL}/api/consulta/cancelarConsulta`,
      {
        method: "delete",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(corpoRequisicao),
      }
    );

    const resposta = await requisicao.json();
    console.log(resposta);
    const sucesso = resposta.consultaApagada;

    if (sucesso) {
      window.location.reload();
    }
  };

  return (
    <div
      class="modal fade"
      id="modalApagar"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">
              Apagar Consulta
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <label htmlFor="senha" className="form-label">
              Senha
            </label>
            <input
              type="password"
              name="senhaApagar"
              id="senhaApagar"
              className="form-control"
              onChange={pegarValorInput}
            />
          </div>
          {<p className="text-center">{mensagem}</p>}
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-danger"
              onClick={apagarConsulta}
            >
              Apagar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalApagar;
