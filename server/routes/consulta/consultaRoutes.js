const express = require("express");
const router = express.Router();
const {
  registrarConsulta,
  consultasDoUsuario
} = require("../../controllers/consulta/consultasControllers");

router.post("/registrarConsulta", registrarConsulta)
router.get("/:id", consultasDoUsuario)

module.exports = router