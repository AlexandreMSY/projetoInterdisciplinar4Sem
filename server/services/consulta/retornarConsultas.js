const Consultas = require("../../db/models/Consultas");

const retornarConsultas = async (usuario_id) => {
  const consultas = await Consultas.findAll({
    raw: true,
    where: {
      usuario_id: usuario_id,
    },
  });

  return consultas;
};

module.exports = retornarConsultas
