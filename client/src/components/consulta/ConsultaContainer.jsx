import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Outlet } from "react-router-dom";
import SideBar from "../sideBar/SideBar";

const ConsultaContainer = () => {
  return (
    <>
      <div
        className="container-fluid d-flex m-0 p-0 vh-100"
        style={{ backgroundColor: "#F5F7F8" }}
      >
        <SideBar />
        <div className="container-fluid">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default ConsultaContainer;
