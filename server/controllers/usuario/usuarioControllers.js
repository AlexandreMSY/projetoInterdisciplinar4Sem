require("dotenv").config();
const criarUsuario = require("../../services/usuario/criarUsuario");
const servicoAtualizarUsuario = require("../../services/usuario/atualizarUsuario");
const {
  procurarUsuario,
  verificarExistenciaEmail,
} = require("../../services/usuario/procurarUsuario");

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
    res.status(400).json({ sucesso: false, mensagem: erro });
  }
};

//POST
const login = async (req, res) => {
  try {
    const { email, senha } = req.body;
    console.log(req.body);
    const usuarioEncontrado = await procurarUsuario(email, senha, true);

    //console.log(usuarioEncontrado);

    if (
      usuarioEncontrado.usuarioEncontrado &&
      usuarioEncontrado.tokenDeAcesso
    ) {
      res.status(200).json({
        sucesso: true,
        tokenDeAcesso: usuarioEncontrado.tokenDeAcesso,
        detalhesUsuario: usuarioEncontrado.detalhesUsuario,
      });
    } else {
      res.status(401).json({
        sucesso: false,
        tokenDeAcesso: undefined,
      });
    }
  } catch (erro) {
    res.status(400).json({
      sucesso: false,
      erro: erro,
    });
  }
};

//GET
const verificarEmail = async (req, res) => {
  const { email } = req.body;
  try {
    const emailExiste = await verificarExistenciaEmail(email);
    console.log(emailExiste);
    const statusHttp = emailExiste ? 200 : 404;

    res.status(statusHttp).json({
      emailEcontrado: emailExiste,
      email: email,
    });
  } catch (erro) {
    res.status(400).json({
      sucesso: false,
      erro: erro,
    });
  }
};

module.exports = {
  registrarUsuario,
  atualizarUsuario,
  login,
  verificarEmail
};
