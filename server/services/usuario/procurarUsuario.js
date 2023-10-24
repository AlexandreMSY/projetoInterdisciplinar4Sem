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

    //console.log(query);

    const usuarioEncontrado = query[0];
    const tokenDeAcesso = gerarJwt
      ? gerarTokenAcesso(usuarioEncontrado)
      : undefined;

    return gerarJwt
      ? {
          usuarioEncontrado: usuarioEncontrado,
          tokenDeAcesso: tokenDeAcesso,
          detalhesUsuario: {
            usuario_id: usuarioEncontrado.usuario_id,
            nome: usuarioEncontrado.nome,
            email: usuarioEncontrado.email,
            telefone: usuarioEncontrado.telefone,
            data_nascimento: usuarioEncontrado.data_nascimento,
          },
        }
      : {
          usuarioEncontrado: usuarioEncontrado,
          detalhesUsuario: {
            usuario_id: usuarioEncontrado.usuario_id,
            nome: usuarioEncontrado.nome,
            email: usuarioEncontrado.email,
            telefone: usuarioEncontrado.telefone,
            data_nascimento: usuarioEncontrado.data_nascimento,
          },
        };
  } catch (erro) {
    if (erro instanceof TypeError)
      return {
        usuarioEncontrado: undefined,
        tokenDeAcesso: undefined,
      };
  }
};

const verificarExistenciaEmail = async (email) => {
  try {
    const query = await Usuarios.findAll({
      raw: true,
      where: {
        email: email,
      },
    });

    return query[0] ? true : false;
  } catch (erro) {
    throw erro;
  }
};

module.exports = { 
  procurarUsuario, 
  verificarExistenciaEmail 
};
