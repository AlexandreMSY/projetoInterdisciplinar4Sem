import React from "react";
import { useNavigate, Link } from "react-router-dom";

const FormularioVerificarEmail = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="d-flex flex-column justify-content-center mt-3">
        <h1 className="text-center mt-5">Redefinir Senha</h1>
        <div className="d-flex flex-column p-4 mt-5">
          <div className="input-group mb-3">
            <input type="email" className="form-control" placeholder="Email" />
          </div>
          <button
            className="btn btn-primary"
            onClick={() => navigate("/esquecisenha/redefinir")}
          >
            Verificar Email
          </button>
        </div>
      </div>
    </>
  );
};

export default FormularioVerificarEmail;
