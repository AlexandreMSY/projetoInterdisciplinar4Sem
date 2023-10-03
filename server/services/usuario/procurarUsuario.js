const Usuarios = require("../../db/models/Usuarios");
const jwt = require("jsonwebtoken");

function gerarTokenAcesso(usuario) {
  return jwt.sign(usuario, process.env.CHAVE_PRIVADA, { expiresIn: "1y" });
}

const procurarUsuario = async (email, senha, gerarJwt) => {
  try {
    const query = await Usuarios.findAndCountAll({
      where: {
        email: email,
        senha: senha,
      },
    });

    const usuarioEncontrado = query.rows[0].dataValues;
    const tokenDeAcesso = gerarJwt
      ? gerarTokenAcesso(usuarioEncontrado)
      : undefined;

    return gerarJwt
      ? {
          usuarioEncontrado: usuarioEncontrado,
          tokenDeAcesso: tokenDeAcesso,
        }
      : { usuarioEncontrado: usuarioEncontrado };
  } catch (erro) {
    if (erro instanceof TypeError)
      return {
        usuarioEncontrado: undefined,
        tokenDeAcesso: undefined,
      };
  }
};

module.exports = procurarUsuario;
