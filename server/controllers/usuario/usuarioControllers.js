require("dotenv").config();
const criarUsuario = require("../../services/usuario/criarUsuario");

//POST
const registrarUsuario = async (req, res) => {
  const { nome, senha, email, telefone, dataNascimento } = req.body;

  try {
    const usuarioCriado = await criarUsuario({
      nome: nome,
      senha: senha,
      email: email,
      telefone: telefone,
      dataNascimento: dataNascimento,
    });

    res.status(200).json({
      sucesso: true,
      mensagem: "Usuario criado com sucesso",
      usuarioCriado: usuarioCriado,
    });
  } catch (erro) {
    res.status(400).json({ sucesso: false, mensagem: erro });
  }
};

module.exports = {
  registrarUsuario,
};
