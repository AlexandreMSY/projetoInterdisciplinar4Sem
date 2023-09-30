const Usuarios = require("../../db/models/Usuarios");

const criarUsuario = async (cadastro) => {
  const { nome, senha, email, telefone, dataNascimento } = cadastro;

  try {
    const novoUsuario = await Usuarios.create({
      nome: nome,
      senha: senha,
      email: email,
      telefone: telefone,
      data_nascimento: dataNascimento,
    });

    return novoUsuario.toJSON();
  } catch (error) {
    let erros = {};

    error.errors.map((erro) => {
      erros[erro.path] = erro.message;
    });

    throw erros;
  }
};

module.exports = criarUsuario;
