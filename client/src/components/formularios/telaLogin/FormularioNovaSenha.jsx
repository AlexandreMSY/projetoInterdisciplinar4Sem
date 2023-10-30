import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import requisicaoPut from "../../../utils/apiFetch/requisicaoPut";
import state from "../../../context/EmailContext";
import configData from "../../../../configData.json"

const FormularioNovaSenha = () => {
  const [erro, setErro] = useState("");
  const [input, setInput] = useState({});
  const navigate = useNavigate();

  const pegarValorInput = (evento) => {
    const nome = evento.target.name;
    const valor = evento.target.value;

    setInput((valores) => ({ ...valores, [nome]: valor }));
  };

  const redefinirSenha = async () => {
    const senha = input.senha
    const confirmarSenha = input.confirmarSenha
    const email = state.email

    if (senha != confirmarSenha){
      setErro("Senhas não coincidem")
      console.log("Teste");
    }else{
      const resposta = await requisicaoPut(`${configData.API_URL}/api/usuario/redefinirSenha`, {
        email: email,
        novaSenha: senha
      })
      const sucesso = resposta.sucesso

      console.log(resposta);

      if(sucesso){
        navigate("/")
      }
    }
  };

  return (
    <>
      <div className="d-flex flex-column justify-content-center mt-3">
        <h1 className="text-center mt-5">Nova Senha</h1>
        <div className="d-flex flex-column p-4 mt-5">
          <div className="input-group mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Senha"
              name="senha"
              onChange={pegarValorInput}
            />
          </div>
          <div className="input-group mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Confirmar Senha"
              name="confirmarSenha"
              onChange={pegarValorInput}
            />
          </div>
          <button className="btn btn-primary" onClick={redefinirSenha}>Redefininir Senha</button>
        </div>
      </div>
    </>
  );
};

export default FormularioNovaSenha;
