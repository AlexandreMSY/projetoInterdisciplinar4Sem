const express = require("express");
const router = express.Router();
const {
  registrarUsuario,
  atualizarUsuario,
  login,
  verificarEmail,
  redefinirSenha
} = require("../../controllers/usuario/usuarioControllers");

router.post("/registrarUsuario", registrarUsuario);
router.put("/atualizarUsuario", atualizarUsuario);
router.post("/login", login)
router.get("/verificarEmail", verificarEmail)
router.put("/redefinirSenha", redefinirSenha)

module.exports = router;
