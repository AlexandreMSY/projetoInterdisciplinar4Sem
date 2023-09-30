const express = require("express");
const router = express.Router();
const {
  registrarUsuario,
  atualizarUsuario
} = require("../../controllers/usuario/usuarioControllers");

router.post("/registrarUsuario", registrarUsuario);
router.put("/atualizarUsuario", atualizarUsuario)

module.exports = router;
