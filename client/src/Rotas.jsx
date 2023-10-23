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

const Test = () => {
  const auth = useAuthUser();
  console.log(auth());
  return <div>{JSON.stringify(auth())}</div>;
};

const Rotas = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} index />
      <Route path="cadastro" element={<Cadastro />} />
      <Route path="esquecisenha" element={<VerificarEmail />} exact />
      <Route path="esquecisenha/redefinir" element={<NovaSenha />} />
      <Route
        path="/secure"
        element={
          <RequireAuth loginPath="/">
            <Test />
          </RequireAuth>
        }
      />
    </Routes>
  </BrowserRouter>
);

export default Rotas;
