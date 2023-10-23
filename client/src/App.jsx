import Rotas from "./Rotas";
import { Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <>
      <div className="container-fluid p-0 vh-100">
        <Rotas />
      </div>
    </>
  );
}

export default App;
