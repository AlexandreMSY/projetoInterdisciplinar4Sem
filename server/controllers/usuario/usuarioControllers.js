require("dotenv").config();
const criarUsuario = require("../../services/usuario/criarUsuario");
const servicoAtualizarUsuario = require("../../services/usuario/atualizarUsuario");

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

    res.status(201).json({
      sucesso: true,
      mensagem: "Usuario criado com sucesso",
      usuarioCriado: usuarioCriado,
    });
  } catch (erro) {
    res.status(400).json({ sucesso: false, mensagem: erro });
  }
};

//PUT
const atualizarUsuario = async (req, res) => {
  const { senha, email } = req.body.usuario;
  const { novosDados } = req.body; //atributos da tabela usuarios a serem alterados

  try {
    const usuarioAtualizado = await servicoAtualizarUsuario(
      {
        senha: senha,
        email: email,
      },
      novosDados
    );

    if (usuarioAtualizado) {
      res
        .status(200)
        .json({
          sucesso: true,
          mensagem: "Usuário alterado",
          dadosAlterados: novosDados,
        });
    }
  } catch (e) {
    res.status(400).json({ sucesso: false, mensagem: e });
  }
};

module.exports = {
  registrarUsuario,
  atualizarUsuario,
};
