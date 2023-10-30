const express = require("express");
const app = express();
const usuarioRouter = require("./routes/usuario/usuarioRoutes");
const consultaRouter = require("./routes/consulta/consultaRoutes")
const { sync } = require("./db/dbConexao");
let cors = require("cors");
require("dotenv").config();

/*
  https://stackoverflow.com/questions/70148975/why-is-req-body-undefined
*/

sync();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/usuario", usuarioRouter);
app.use("/api/consulta", consultaRouter)

app.listen(process.env.SERVER_PORT, () => {
  console.log("Porta " + process.env.SERVER_PORT);
});
