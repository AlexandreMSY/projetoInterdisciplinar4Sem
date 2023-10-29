import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const ContainerConsultas = ({ children }) => {
  return (
    <>
      <div
        className="d-flex flex-column gap-4 vh-100"
        style={{ backgroundColor: "#F5F7F8" }}
      >
        {children}
      </div>
    </>
  );
};

export default ContainerConsultas