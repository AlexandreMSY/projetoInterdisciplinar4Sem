const Usuarios = require("../../db/models/Usuarios");

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

module.exports = verificarExistenciaEmail
