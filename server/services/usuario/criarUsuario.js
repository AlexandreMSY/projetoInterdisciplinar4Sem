const Usuarios = require("../../db/models/Usuarios");

const criarUsuario = async (cadastro) => {
  const { nome, senha, email, telefone, dataNascimento } = cadastro;

  console.log(cadastro);

  try {
    const novoUsuario = await Usuarios.create({
      nome: nome,
      senha: senha,
      email: email,
      telefone: telefone,
      data_nascimento: dataNascimento,
    });

    return novoUsuario.toJSON();
  } catch (erro) {
    let erros = {};
    console.log(erro);

    erro.errors.map((erro) => {
      erros[erro.path] = erro.message;
    });

    throw erros;
  }
};

module.exports = criarUsuario;
