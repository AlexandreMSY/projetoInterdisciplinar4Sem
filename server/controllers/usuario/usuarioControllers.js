require("dotenv").config();
const criarUsuario = require("../../services/usuario/criarUsuario");
const servicoAtualizarUsuario = require("../../services/usuario/atualizarUsuario");
const verificarExistenciaEmail = require("../../services/usuario/verificarExistenciaEmail");
const servicoRedefinirSenha = require("../../services/usuario/redefinirSenha");
const procurarUsuario = require("../../services/usuario/procurarUsuario");

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
      res.status(200).json({
        sucesso: true,
        mensagem: "Usuário alterado",
        dadosAlterados: novosDados,
      });
    } else {
      res.status(404).json({
        sucesso: false,
        mensagem: "Usuário não encontrado",
      });
    }
  } catch (erro) {
    console.log(erro);
    res.status(400).json({ sucesso: false, mensagem: String(erro) });
  }
};

//POST
const login = async (req, res) => {
  try {
    const { email, senha } = req.body;
    const { usuarioEncontrado, tokenDeAcesso } = await procurarUsuario(
      email,
      senha,
      true
    );

    if (!usuarioEncontrado) {
      res.status(401).json({
        sucesso: false,
        tokenDeAcesso: undefined,
      });
    } else {
      res.status(200).json({
        sucesso: true,
        tokenDeAcesso: tokenDeAcesso,
        detalhesUsuario: usuarioEncontrado,
      });
    }
  } catch (erro) {
    if (erro instanceof TypeError) {
      res.status(400).json({
        sucesso: false,
        erro: "Corpo da requisição não preenchido",
      });
    } else {
      res.status(400).json({
        sucesso: false,
        erro: String(erro),
      });
    }
  }
};

//GET
const verificarEmail = async (req, res) => {
  const { email } = req.query;
  try {
    const emailExiste = await verificarExistenciaEmail(email);
    console.log(emailExiste);
    const statusHttp = emailExiste ? 200 : 404;

    res.status(statusHttp).json({
      emailEncontrado: emailExiste,
      email: email,
    });
  } catch (erro) {
    res.status(400).json({
      sucesso: false,
      erro: String(erro),
    });
  }
};

//PUT
const redefinirSenha = async (req, res) => {
  try {
    const { email, novaSenha } = req.body;
    const senhaRedefinida = await servicoRedefinirSenha(email, novaSenha);

    if (senhaRedefinida) {
      res.status(200).json({ sucesso: true, mensagem: "Senha atualizada" });
    } else {
      res
        .status(404)
        .json({ sucesso: false, mensagem: "Email não encontrado" });
    }
  } catch (erro) {
    console.log(erro);
    res.status(400).json({ sucesso: false, mensagem: String(erro) });
  }
};

module.exports = {
  registrarUsuario,
  atualizarUsuario,
  login,
  verificarEmail,
  redefinirSenha,
};
