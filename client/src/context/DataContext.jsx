import { proxy } from "valtio";

const dataContext = proxy({
  dataAtual: "",
});

export default dataContext;
