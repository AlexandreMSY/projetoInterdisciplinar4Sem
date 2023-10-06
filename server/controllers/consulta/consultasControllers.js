const criarConsulta = require("../../services/consulta/criarConsulta");
const servicoRetornarConsultas = require("../../services/consulta/retornarConsultas");
const servicoAtualizarConsulta = require("../../services/consulta/atualizarConsulta");

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
const retornarConsultas = async (req, res) => {
  const { id } = req.params;
  const consultas = await servicoRetornarConsultas(id);

  if (consultas.length === 0) {
    res.status(404).json({ sucesso: false, consultas: [] });
  } else {
    res.status(200).json({ sucesso: true, consultas: consultas });
  }
};

//PUT
const atualizarConsulta = async (req, res) => {
  const { senha, email } = req.body.usuario;
  const { consulta_id } = req.body.consulta;
  const novosDados = req.body.consulta.novosDados;

  try {
    const consultaAtualizada = await servicoAtualizarConsulta(
      {
        senha: senha,
        email: email,
      },
      consulta_id,
      novosDados
    );

    if (consultaAtualizada) {
      res.status(200).json({
        sucesso: consultaAtualizada,
        mensagem: "Consulta atualizada",
        novosDados: novosDados,
      });
    } else {
      res.status(404).json({
        sucesso: consultaAtualizada,
        mensagem: "Usuário ou Consulta não encontrado",
      });
    }
  } catch (erro) {
    //console.log(erro);
    res.status(400).json({
      sucesso: false,
      mensagem: erro,
    });
  }
};

module.exports = {
  registrarConsulta,
  retornarConsultas,
  atualizarConsulta
};
