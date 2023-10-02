const Usuarios = require("../../db/models/Usuarios");
const jwt = require("jsonwebtoken");

function gerarTokenAcesso(usuario) {
  return jwt.sign(usuario, process.env.CHAVE_PRIVADA, { expiresIn: "1y" });
}

const procurarUsuario = async (email, senha) => {
  try {
    const query = await Usuarios.findAndCountAll({
      where: {
        email: email,
        senha: senha,
      },
    });

    const usuarioEncontrado = query.rows[0].dataValues;
    const tokenDeAcesso = gerarTokenAcesso(usuarioEncontrado);

    return {
      usuarioEncontrado: usuarioEncontrado,
      tokenDeAcesso: tokenDeAcesso,
    };
  } catch (erro) {
    if (erro instanceof TypeError)
      return {
        usuarioEncontrado: undefined,
        tokenDeAcesso: undefined,
      };
  }
};

/*const test = async () => {
  const test = await procurarUsuario("lol@gmail.com", "lol");
  console.log(test);
};

test();*/

module.exports = {
  procurarUsuario,
};
