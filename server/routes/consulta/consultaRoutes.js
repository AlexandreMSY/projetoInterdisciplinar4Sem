const express = require("express");
const router = express.Router();
const {
  registrarConsulta,
  retornarConsultas,
  atualizarConsulta,
  cancelarConsulta,
} = require("../../controllers/consulta/consultasControllers");

router.post("/registrarConsulta", registrarConsulta);
router.get("/:id", retornarConsultas);
router.put("/atualizarConsulta", atualizarConsulta);
router.delete("/cancelarConsulta", cancelarConsulta);

module.exports = router;
