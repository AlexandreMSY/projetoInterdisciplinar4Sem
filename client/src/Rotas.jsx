import { useState } from "react";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import VerificarEmail from "./pages/VerificarEmail";
import NovaSenha from "./pages/NovaSenha";
import { RequireAuth } from "react-auth-kit";
import { Router, Routes, Route, BrowserRouter } from "react-router-dom";
import { useAuthUser } from "react-auth-kit";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import ConsultaContainer from "./components/consulta/ConsultaContainer";
import Inicio from "./pages/consulta/Inicio";
import CadastrarConsultas from "./pages/consulta/CadastrarConsultas";
import SuasConsultas from "./pages/consulta/SuasConsultas";

const Rotas = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} index />
      <Route path="cadastro" element={<Cadastro />} />
      <Route path="esquecisenha" element={<VerificarEmail />} exact />
      <Route path="esquecisenha/redefinir" element={<NovaSenha />} />
      <Route
        path="agenda"
        element={
          <RequireAuth loginPath="/">
            <ConsultaContainer />
          </RequireAuth>
        }
      >
        <Route index path="inicio" element={<Inicio />} />
        <Route path="cadastro" element={<CadastrarConsultas />} />
        <Route path="consultas" element={<SuasConsultas />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Rotas;
