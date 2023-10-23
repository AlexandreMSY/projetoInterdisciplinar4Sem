import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const FormularioLogin = () => {
  const navigate = useNavigate()
  
  return (
    <>
      <div className="d-flex flex-column justify-content-center mt-3">
        <span className="d-flex flex-row justify-content-end gap-3 mb-4">
          <p>Não possui uma conta?</p>
          <button className="btn btn-primary" onClick={() => navigate("/cadastro")}>
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
            <input type="text" className="form-control" placeholder="Email" />
          </div>
          <label htmlFor="basic-url" className="form-label text-end">
            <Link to="/esquecisenha">Esqueceu a senha?</Link>
          </label>
          <div className="input-group mb-3">
            <input type="password" className="form-control" placeholder="Senha" />
          </div>
          <button className="btn btn-primary">Login</button>
        </div>
      </div>
    </>
  );
};

export default FormularioLogin;
