import { proxy } from "valtio";

const consultaContext = proxy({
  consulta_id: "",
  senha: "",
  especialidade: "",
  data: "",
  hora: "",
  observacoes: ""
});

export default consultaContext;
