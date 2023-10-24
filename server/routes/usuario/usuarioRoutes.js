const express = require("express");
const router = express.Router();
const {
  registrarUsuario,
  atualizarUsuario,
  login,
  verificarEmail
} = require("../../controllers/usuario/usuarioControllers");

router.post("/registrarUsuario", registrarUsuario);
router.put("/atualizarUsuario", atualizarUsuario);
router.post("/login", login)
router.get("/verificarEmail", verificarEmail)

module.exports = router;
