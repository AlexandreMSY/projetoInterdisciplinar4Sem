const criarConsulta = require("../../services/consulta/criarConsulta");
const retornarConsultas = require("../../services/consulta/retornarConsultas");

//POST
const registrarConsulta = async (req, res) => {
  const { usuario_id, data_hora, especialidade, observacoes } = req.body;

  try {
    const consulta = await criarConsulta({
      usuario_id: usuario_id,
      data_hora: data_hora,
      especialidade: especialidade,
      observacoes: observacoes,
    });

    res.status(200).json({ sucesso: true, consultaCriada: consulta });
  } catch (erro) {
    res
      .status(400)
      .json({ sucesso: false, erro: erro.erro ? erro.erro : erro });
    //console.log(erro);
  }
};

//GET
const consultasDoUsuario = async (req, res) => {
  const { id } = req.params;
  const consultas = await retornarConsultas(id);

  if (consultas.length === 0) {
    res.status(404).json({ sucesso: false, consultas: [] });
  } else {
    res.status(200).json({ sucesso: true, consultas: consultas });
  }
};

module.exports = {
  registrarConsulta,
  consultasDoUsuario,
};
