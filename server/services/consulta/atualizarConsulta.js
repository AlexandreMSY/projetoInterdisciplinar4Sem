const Consultas = require("../../db/models/Consultas");
const Usuarios = require("../../db/models/Usuarios");
const procurarUsuario = require("../usuario/procurarUsuario");
//const jwt = require("jsonwebtoken");

const atualizarConsulta = async (autenticacao, consultaId, novosDados) => {
  const { senha, email } = autenticacao;
  const usuarioEncontrado = await Usuarios.findOne({
    raw: true,
    where: {
      senha: senha,
      email: email,
    },
  });
  const consultaEncontrada = await Consultas.findOne({
    raw: true,
    where: {
      consulta_id: consultaId,
    },
  });

  //console.log(usuarioEncontrado);

  if (usuarioEncontrado && consultaEncontrada) {
    try {
      const dadosAModificar = {};

      Object.keys(novosDados).forEach(
        (chave) => (dadosAModificar[chave] = novosDados[chave])
      );

      const test = await Consultas.update(dadosAModificar, {
        where: {
          consulta_id: consultaId,
        },
      });

      console.log(test);

      return true;
    } catch (erro) {
      if (erro instanceof TypeError) {
        throw new Error("novosDados não pode ser undefined");
      }
    }
  } else {
    return false;
  }
};

module.exports = atualizarConsulta;
