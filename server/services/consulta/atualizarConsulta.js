const Consultas = require("../../db/models/Consultas");
const procurarUsuario = require("../usuario/procurarUsuario");
//const jwt = require("jsonwebtoken");

const atualizarConsulta = async (autenticacao, consultaId, novosDados) => {
  const { senha, email } = autenticacao;
  const usuario = await procurarUsuario(email, senha);
  const usuarioEncontrado = usuario.usuarioEncontrado

  //console.log(usuarioEncontrado);

  if (usuarioEncontrado) {
    try {
      const dadosAModificar = {};

      Object.keys(novosDados).forEach(
        (chave) => (dadosAModificar[chave] = novosDados[chave])
      );

      await Consultas.update(dadosAModificar, {
        where: {
          consulta_id: consultaId,
        },
      });

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

/*atualizarConsulta(
  { senha: "teste", email: "teste" },
  "b5a3fa2f-353c-430d-b4f1-8bfc0de5d522"
  {especialidade: "Crazy",}
);*/

module.exports = atualizarConsulta
