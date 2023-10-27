import { React, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSignIn } from "react-auth-kit";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import requisicaoPost from "../../../utils/apiFetch/requisicaoPost";

const FormularioLogin = () => {
  const [input, setInput] = useState({});
  const [erro, setErro] = useState("");
  const signIn = useSignIn();
  const navigate = useNavigate();

  const pegarValorInput = (evento) => {
    const nome = evento.target.name;
    const valor = evento.target.value;

    setInput((valores) => ({ ...valores, [nome]: valor }));
  };

  const login = async () => {
    const corpoRequisicao = {
      email: input.email,
      senha: input.senha,
    };

    const resposta = await requisicaoPost(
      "http://localhost:8000/api/usuario/login",
      corpoRequisicao
    );

    if (resposta.sucesso) {
      signIn({
        token: resposta.tokenDeAcesso,
        expiresIn: 8000,
        tokenType: "Bearer",
        authState: resposta.detalhesUsuario,
      });

      navigate("agenda/inicio");
    } else {
      setErro("Usuário não encontrado")
    }
  };

  return (
    <>
      <div className="d-flex flex-column justify-content-center mt-3">
        <span className="d-flex flex-row justify-content-end gap-3 mb-4">
          <p>Não possui uma conta?</p>
          <button
            className="btn btn-primary"
            onClick={() => navigate("/cadastro")}
          >
            Cadastrar
          </button>
        </span>
        <h1 className="text-center">Bem vindo de volta!</h1>
        <div className="d-flex flex-column p-4 mt-5">
          <div className="input-group mb-1">
            <span
              className="input-group-text bg-primary text-white"
              id="basic-addon1"
            >
              @
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Email"
              name="email"
              onChange={pegarValorInput}
            />
          </div>
          <label htmlFor="basic-url" className="form-label text-end">
            <Link to="/esquecisenha">Esqueceu a senha?</Link>
          </label>
          <div className="input-group mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Senha"
              name="senha"
              onChange={pegarValorInput}
            />
          </div>
          <button className="btn btn-primary" onClick={login}>
            Login
          </button>
          {erro && <p className="text-center mt-3 text-danger">{erro}</p>}
        </div>
      </div>
    </>
  );
};

export default FormularioLogin;
