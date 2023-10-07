const Usuarios = require("../../db/models/Usuarios");
const jwt = require("jsonwebtoken");

function gerarTokenAcesso(usuario) {
  return jwt.sign(usuario, process.env.CHAVE_PRIVADA, { expiresIn: "1y" });
}

const procurarUsuario = async (email, senha, gerarJwt) => {
  try {
    const query = await Usuarios.findAll({
      raw: true,
      where: {
        email: email,
        senha: senha,
      },
    });

    const usuarioEncontrado = query[0];
    const tokenDeAcesso = gerarJwt
      ? gerarTokenAcesso(usuarioEncontrado)
      : undefined;

    return gerarJwt
      ? {
          usuarioEncontrado: usuarioEncontrado,
          tokenDeAcesso: tokenDeAcesso,
        }
      : usuarioEncontrado ;
  } catch (erro) {
    if (erro instanceof TypeError)
      return {
        usuarioEncontrado: undefined,
        tokenDeAcesso: undefined,
      };
  }
};

module.exports = procurarUsuario;
