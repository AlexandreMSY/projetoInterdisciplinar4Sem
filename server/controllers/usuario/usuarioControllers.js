require("dotenv").config();
const Pacientes = require("../../db/models/Pacientes");

//POST
const registrarUsuario = async (req, res) => {
  const { nome, senha, email, telefone, dataNascimento } = req.body;

  console.log(req.body);

  await Pacientes.create({
    nome: nome,
    senha: senha,
    email: email,
    telefone: telefone,
    data_nascimento: dataNascimento,
  });
};

module.exports = {
  registrarUsuario,
};
