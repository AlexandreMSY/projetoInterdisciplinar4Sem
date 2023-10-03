const express = require("express");
const router = express.Router();
const {
  registrarUsuario,
  atualizarUsuario,
  login,
} = require("../../controllers/usuario/usuarioControllers");

router.post("/registrarUsuario", registrarUsuario);
router.put("/atualizarUsuario", atualizarUsuario);
router.post("/login", login)

module.exports = router;
