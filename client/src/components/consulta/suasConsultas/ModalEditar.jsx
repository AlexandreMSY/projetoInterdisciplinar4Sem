import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import FormularioEditarConsulta from "../../formularios/consultas/FormularioEditarConsultas";
import requisicaoGet from "../../../utils/apiFetch/requisicaoGet";
import consultaContext from "../../../context/ConsultaContext";
import { useSnapshot } from "valtio";
import { useAuthUser } from "react-auth-kit";
import { useNavigate } from "react-router-dom";
import dataContext from "../../../context/DataContext";

const ModalEditar = () => {
  const snap = useSnapshot(consultaContext);
  const navigate = useNavigate();
  const auth = useAuthUser();
  const { consulta_id } = snap;
  const [input, setInput] = useState(consultaContext);
  const [mensagem, setMensagem] = useState("");
  const pegarValorInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInput((values) => ({ ...values, [name]: value }));
  };

  const editarConsulta = async () => {
    const corpoRequisicao = {
      usuario: {
        senha: input.senha,
        email: auth().email,
      },
      consulta: {
        consulta_id: consulta_id,
        novosDados: {
          data_hora: `${input.data} ${input.hora}`,
          especialidade: input.especialidade,
          observacoes: input.observacoes,
        },
      },
    };
    const requisicao = await fetch(
      `http://localhost:8000/api/consulta/atualizarConsulta`,
      {
        method: "put",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(corpoRequisicao),
      }
    );
    const resposta = await requisicao.json();
    const sucesso = resposta.sucesso;
    const mensagem = resposta.mensagem;

    if (sucesso) {
      window.location.reload()
      setMensagem(mensagem);
    }
  };

  return (
    <div
      class="modal fade"
      id="modalEditar"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">
              Editar Consulta
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <FormularioEditarConsulta
              especialidade={input.especialidade}
              data={input.data}
              hora={input.hora}
              observacoes={input.observacoes}
              onChange={pegarValorInput}
            />
          </div>
          {<p className="text-center">{mensagem}</p>}
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-primary"
              onClick={editarConsulta}
            >
              Editar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalEditar;
