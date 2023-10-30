const Usuarios = require("../../db/models/Usuarios");

const servicoRedefinirSenha = async (email, novaSenha) => {
  try {
    const procurarUsuario = await Usuarios.findAll({
      raw: true,
      where: {
        email: email,
      },
    });

    const usuarioEncontrado = procurarUsuario[0];

    if (usuarioEncontrado) {
      await Usuarios.update(
        { senha: novaSenha },
        { where: procurarUsuario[0] }
      );

      return true;
    } else {
      return false;
    }
  } catch (erro) {
    throw erro;
  }
};

module.exports = servicoRedefinirSenha
