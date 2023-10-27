import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import requisicaoGet from "../../../utils/apiFetch/requisicaoGet";
import state from "../../../context/EmailContext";

const FormularioVerificarEmail = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState("");

  const pegarValorInput = (evento) => {
    const nome = evento.target.name;
    const valor = evento.target.value;

    setInput((valores) => ({ ...valores, [nome]: valor }));
  };

  const verificarEmail = async () => {
    const email = input.email;
    const url = `http://localhost:8000/api/usuario/verificarEmail?email=${email}`;
    const resposta = await requisicaoGet(url);
    const emailEncontrado = resposta.emailEncontrado;

    if (emailEncontrado) {
      //equivalente ao context api do react.js
      state.emailVerificado = true;
      state.email = email
      navigate("/esquecisenha/redefinir");
    }
  };

  return (
    <div className="d-flex flex-column justify-content-center mt-3">
      <h1 className="text-center mt-5">Redefinir Senha</h1>
      <div className="d-flex flex-column p-4 mt-5">
        <div className="input-group mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            name="email"
            onChange={pegarValorInput}
          />
        </div>
        <button className="btn btn-primary" onClick={verificarEmail}>
          Verificar Email
        </button>
      </div>
    </div>
  );
};

export default FormularioVerificarEmail;
