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
import SideBar from "./components/sideBar/SideBar";
import Inicio from "./pages/consulta/Inicio";

const Test = () => {
  const auth = useAuthUser();
  const details = auth()

  return (
    <div>
      <Inicio />
    </div>
  );
};

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
            <Test />
          </RequireAuth>
        }
      >
        <Route path="teste" element={<>APC</>}/>
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Rotas;
