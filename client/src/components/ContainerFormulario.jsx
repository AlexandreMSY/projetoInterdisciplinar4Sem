import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Outlet } from "react-router-dom";

const ContainerFormulario = ({ children }) => {
  return (
    <>
      <div
        className="container-fluid vh-100"
        style={{
          backgroundImage: "url('../src/assets/fundo.png')",
          backgroundSize: "cover",
          backgroundPosition: "left",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="d-flex justify-content-end me-5 pt-5 h-75">
          <div className="bg-white p-4 rounded-4 border border-secondary border-opacity-25 shadow-lg" style={{ width: "40%" }}>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContainerFormulario;
