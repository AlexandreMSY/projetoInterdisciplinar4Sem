const Consultas = require("../../db/models/Consultas");

const retornarConsultaIndividual = async (consultaId) => {
  const consultas = await Consultas.findAll({
    raw: true,
    where: {
      consulta_id: consultaId,
    },
  });

  return consultas;
};

module.exports = retornarConsultaIndividual
