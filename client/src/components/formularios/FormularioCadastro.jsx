import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const FormularioCadastro = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="d-flex flex-column justify-content-center mt-3">
        <h1 className="text-center mt-5">Criar Conta</h1>
        <div className="d-flex flex-column p-4 mt-5">
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Nome" />
          </div>
          <div className="input-group mb-3">
            <input type="email" className="form-control" placeholder="Email" />
          </div>
          <div className="input-group mb-3">
            <input type="date" className="form-control" />
          </div>
          <div className="input-group mb-3">
            <input
              type="telefone"
              className="form-control"
              placeholder="Telefone"
            />
          </div>
          <div className="input-group mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Senha"
            />
          </div>
          <button className="btn btn-primary" onClick={() => navigate("/")}>
            Criar Conta
          </button>
        </div>
      </div>
    </>
  );
};

export default FormularioCadastro;
