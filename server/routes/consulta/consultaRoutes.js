const express = require("express");
const router = express.Router();
const {
  registrarConsulta,
  retornarConsultas,
  atualizarConsulta,
} = require("../../controllers/consulta/consultasControllers");

router.post("/registrarConsulta", registrarConsulta);
router.get("/:id", retornarConsultas);
router.put("/atualizarConsulta", atualizarConsulta);

module.exports = router;
