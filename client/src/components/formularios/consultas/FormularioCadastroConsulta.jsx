import React, { useEffect, useState } from "react";
import {useAuthUser} from 'react-auth-kit'
import { useNavigate } from "react-router-dom";
import requisicaoPost from "../../../utils/apiFetch/requisicaoPost"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import configData from "../../../../configData.json"

const FormularioCadastroConsulta = () => {
  const [input, setInput] = useState({});
  const [mensagem, setMensagem] = useState("")
  const auth = useAuthUser()
  const navigate = useNavigate()

  const pegarValorInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInput((values) => ({ ...values, [name]: value }));
  };

  const dataAtual = () => {
    const date = new Date();
    let dia = date.getDate();
    let mes = date.getMonth() + 1;
    let ano = date.getFullYear();

    let dataAtual = `${ano}-${mes}-${dia}`;

    return dataAtual;
  };

  const enviar = async () => {
    //console.log(input);
    setMensagem("")
    const { especialidade, data, hora, observacoes } = input;
    if(!especialidade || !data || !hora){
      setMensagem("Alguns dados não foram preenchidos") 
      return
    }

    const resposta = await requisicaoPost(`${configData.API_URL}/api/consulta/registrarConsulta`, {
      usuario_id: auth().usuario_id,
      data_hora: `${input.data} ${input.hora}`,
      especialidade: especialidade,
      observacoes: observacoes
    })

    const {sucesso} = resposta

    console.log(sucesso);

    if(sucesso){
      setMensagem("Consulta Cadastrada com Sucesso")
      navigate("/agenda/inicio")
    }else{
      setMensagem("Erro no cadastro")
    }
  };

  return (
    <>
      <div className="d-flex flex-column gap-3 m-2">
        <div>
          <label htmlFor="basic-url" className="form-label fw-semibold">
            Especialidade
          </label>
          <select
            name="especialidade"
            className="form-select"
            onChange={pegarValorInput}
          >
            <option selected>Selecionar Especialidade</option>
            <option value="pediatria">Pediatria</option>
            <option value="geriatria">Geriatria</option>
            <option value="neurologista">Neurologista</option>
          </select>
        </div>
        <div className="d-flex flex-row gap-4">
          <div className="w-50">
            <label htmlFor="data" className="form-label fw-semibold">
              Data
            </label>
            <div className="input-group">
              <input
                type="date"
                name="data"
                id="data"
                className="form-control"
                min={dataAtual()}
                onChange={pegarValorInput}
              />
            </div>
          </div>
          <div className="w-50">
            <label htmlFor="hora" className="form-label fw-semibold">
              Hora
            </label>
            <div>
              <input
                type="time"
                name="hora"
                id="hora"
                className="form-control"
                onChange={pegarValorInput}
              />
            </div>
          </div>
        </div>
        <div className="d-flex flex-column">
          <label htmlFor="observacoes" className="form-label fw-semibold">
            Observacões
          </label>
          <textarea
            name="observacoes"
            id="observacoes"
            cols="30"
            rows="10"
            className="form-control"
            onChange={pegarValorInput}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={enviar}>
          Enviar
        </button>
        {mensagem && <p className="text-center">{mensagem}</p>}
      </div>
    </>
  );
};

export default FormularioCadastroConsulta;
