const express = require("express");
const router = express.Router();
const {
  registrarUsuario,
} = require("../../controllers/usuario/usuarioControllers");

router.post("/registrarUsuario", registrarUsuario);

module.exports = router;
