const Consultas = require("../../db/models/Consultas");
const procurarUsuario = require("../usuario/procurarUsuario");

const cancelarConsulta = async (autenticacao, consultaId) => {
  const { senha, email } = autenticacao;
  const usuarioEncontrado = await procurarUsuario(email, senha);

  if (usuarioEncontrado) {
    const colunasApagadas = await Consultas.destroy({
      where: {
        consulta_id: consultaId,
      },
    });

    return colunasApagadas === 1
      ? { colunasApagadas: true }
      : { colunasApagadas: false };
  } else {
    return {
      colunasApagadas: false,
      mensagem: "Usuário não encontrado",
    };
  }
};

module.exports = cancelarConsulta;
