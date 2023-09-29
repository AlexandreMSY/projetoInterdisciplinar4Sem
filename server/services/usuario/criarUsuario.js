const Usuarios = require("../../db/models/Usuarios");

const criarUsuario = async (cadastro) => {
  const { nome, senha, email, telefone, dataNascimento } = cadastro;

  try {
    await Usuarios.create({
      nome: nome,
      senha: senha,
      email: email,
      telefone: telefone,
      data_nascimento: dataNascimento,
    });

    return true
  } catch (error) {
    const mensagemDeErro = error.message
    throw new Error(mensagemDeErro);
  }
};

module.exports = criarUsuario;
