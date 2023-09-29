const express = require("express");
const app = express();
const router = require("./routes/usuario/usuarioRoutes");

/*
  https://stackoverflow.com/questions/70148975/why-is-req-body-undefined
*/

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/usuario", router);

app.listen(8000, () => {
  console.log("Porta 8000");
});
