import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import requisicaoPost from "../../../utils/apiFetch/requisicaoPost";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import configData from "../../../../configData.json"

const FormularioCadastro = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({});
  const [erro, setErro] = useState("");

  const pegarValorInput = (evento) => {
    const nome = evento.target.name;
    const valor = evento.target.value;

    setInput((valores) => ({ ...valores, [nome]: valor }));
  };

  const cadastrarConta = async () => {
    let dados = {
      nome: input.nome,
      email: input.email,
      dataNascimento: input.dataNascimento,
      telefone: input.telefone,
      senha: input.senha,
    };

    const corpoRequisicao = {};

    Object.entries(dados).forEach((chave) => {
      const valor = chave[1];
      const nomeChave = String(chave[0]);

      if (valor) {
        console.log(valor);
        corpoRequisicao[nomeChave] = valor;
      }
    });

    const resposta = await requisicaoPost(
      `${configData.API_URL}/api/usuario/registrarUsuario`,
      corpoRequisicao
    );

    if (!resposta.sucesso) {
      const mensagem = JSON.stringify(resposta);
      console.log(resposta);
      if (mensagem.includes("cannot be null")) {
        setErro("Um dos campos não foram preenchidos");
      } else {
        if (mensagem.includes("telefone must be unique")) {
          setErro("Telefone já cadastrado");
        } else {
          setErro("Email já cadastrado");
        }
      }
    } else {
      setErro("")
      navigate("/")
    }
  };

  return (
    <>
      <div className="d-flex flex-column justify-content-center mt-3">
        <h1 className="text-center mt-5">Criar Conta</h1>
        <div className="d-flex flex-column p-4 mt-5">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Nome"
              name="nome"
              onChange={pegarValorInput}
            />
          </div>
          <div className="input-group mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              name="email"
              onChange={pegarValorInput}
            />
          </div>
          <div className="input-group mb-3">
            <input
              type="date"
              className="form-control"
              name="dataNascimento"
              onChange={pegarValorInput}
            />
          </div>
          <div className="input-group mb-3">
            <input
              type="telefone"
              className="form-control"
              placeholder="Telefone"
              name="telefone"
              onChange={pegarValorInput}
            />
          </div>
          <div className="input-group mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Senha"
              name="senha"
              onChange={pegarValorInput}
            />
          </div>
          <button className="btn btn-primary" onClick={cadastrarConta}>
            Criar Conta
          </button>
          {erro && <p className="text-center text-danger">{erro}</p>}
        </div>
      </div>
    </>
  );
};

export default FormularioCadastro;
