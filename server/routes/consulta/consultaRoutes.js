const express = require("express");
const router = express.Router();
const {
  registrarConsulta,
  retornarConsultas,
  atualizarConsulta,
  cancelarConsulta,
  detalhesConsulta,
} = require("../../controllers/consulta/consultasControllers");

router.post("/registrarConsulta", registrarConsulta);
router.get("/:id", retornarConsultas);
router.get("/detalhesConsulta/:idConsulta", detalhesConsulta)
router.put("/atualizarConsulta", atualizarConsulta);
router.delete("/cancelarConsulta", cancelarConsulta);

module.exports = router;
