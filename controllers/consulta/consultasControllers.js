const criarConsulta = require("../../services/consulta/criarConsulta");
const servicoRetornarConsultas = require("../../services/consulta/retornarConsultas");
const servicoAtualizarConsulta = require("../../services/consulta/atualizarConsulta");
const servicoCancelarConsulta = require("../../services/consulta/cancelarConsulta");
const retornarConsultaIndividual = require("../../services/consulta/retornarConsultaIndividual");

//POST
const registrarConsulta = async (req, res) => {
  const adicionarZero = (numero) => {
    if (numero < 10) {
      numero = "0" + numero;
    }
    return numero;
  };
  const { usuario_id, data_hora, especialidade, observacoes } = req.body;
  const dataHora = new Date(data_hora);

  const hora = adicionarZero(dataHora.getHours());
  const minutos = adicionarZero(dataHora.getMinutes());
  const segundos = adicionarZero(dataHora.getSeconds());

  const horaString = `${hora}:${minutos}:${segundos}`
  const dataString = dataHora.toISOString().slice(0,10)

  try {
    const consulta = await criarConsulta({
      usuario_id: usuario_id,
      data_hora: `${dataString} ${horaString}`,
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
  const id = req.params.id;
  const consultas = await servicoRetornarConsultas(id);

  if (consultas.length === 0) {
    res.status(404).json({ sucesso: false, consultas: [] });
  } else {
    res.status(200).json({ sucesso: true, consultas: consultas });
  }
};

/*//GET
const detalhesConsulta = async (req, res) => {
  const { idConsulta } = req.params;
  const consultas = await retornarConsultaIndividual(idConsulta);

  if (consultas.length === 0) {
    res.status(404).json({ sucesso: false, consultas: [] });
  } else {
    res.status(200).json({ sucesso: true, consultas: consultas });
  }
};*/

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
    const colunasAlteradas = consultaAtualizada.colunasAlteradas;

    if (colunasAlteradas) {
      res.status(200).json({
        sucesso: consultaAtualizada,
        mensagem: "Consulta atualizada",
        novosDados: novosDados,
      });
    } else {
      const mensagem = consultaAtualizada.mensagem;

      if (mensagem === "Dados já atribuidos na coluna") {
        res.status(200).json({
          sucesso: true,
          consultaAtualizada: consultaAtualizada,
          mensagem: mensagem,
        });
      } else if (mensagem === "Usuário não encontrado") {
        res.status(401).json({
          sucesso: colunasAlteradas,
          mensagem: mensagem,
        });
      } else {
        res.status(404).json({
          sucesso: colunasAlteradas,
          mensagem: "Consulta não encontrada",
        });
      }
    }
  } catch (erro) {
    console.log(erro);
    res.status(400).json({
      sucesso: false,
      mensagem: erro,
    });
  }
};

//DELETE
const cancelarConsulta = async (req, res) => {
  const { senha, email } = req.body.usuario;
  const { consulta_id } = req.body;

  const apagarColunas = await servicoCancelarConsulta(
    {
      senha: senha,
      email: email,
    },
    consulta_id
  );
  const colunasApagadas = apagarColunas.colunasApagadas;

  if (colunasApagadas) {
    res.status(200).json({
      consultaApagada: true,
      mensagem: "Consulta cancelada",
    });
  } else {
    const mensagem = apagarColunas.mensagem;

    if (mensagem === "Usuário não encontrado") {
      res.status(401).json({
        colunasApagadas: false,
        erro: "Erro na autenticação do usuário",
      });
    } else {
      res.status(400).json({
        colunasApagadas: false,
        erro: "Consulta não encontrada",
      });
    }
  }
};

module.exports = {
  registrarConsulta,
  retornarConsultas,
  atualizarConsulta,
  cancelarConsulta,
};
