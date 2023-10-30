const Consultas = require("../../db/models/Consultas");
//const dbConexao = require("../../db/dbConexao");

const criarConsulta = async (cadastro) => {
  const { usuario_id, data_hora, especialidade, observacoes } = cadastro;

  try {
    const consulta = await Consultas.create({
      usuario_id: usuario_id,
      data_hora: data_hora,
      especialidade: especialidade,
      observacoes: observacoes,
    });

    return consulta.toJSON();
  } catch (erro) {
    console.log(erro);
    let erros = {};
    const codigoDeErro = erro.original ? erro.original.code : undefined;
    
    if (
      codigoDeErro != undefined &&
      codigoDeErro === "ER_NO_REFERENCED_ROW_2"
    ) {
      erros["erro"] = "Usuário não encontrado";

      throw erros;
    }

    if (erro.errors != undefined) {
      //console.log(erro);

      erro.errors.map((erro) => {
        erros[erro.path] = erro.message;
      });

      throw erros;
    }

    //console.log(codigoDeErro);
  }
};

module.exports = criarConsulta;
