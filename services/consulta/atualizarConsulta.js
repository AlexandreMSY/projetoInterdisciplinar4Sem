const Consultas = require("../../db/models/Consultas");
const Usuarios = require("../../db/models/Usuarios");
const { procurarUsuario } = require("../../services/usuario/procurarUsuario");
//const jwt = require("jsonwebtoken");

const atualizarConsulta = async (autenticacao, consultaId, novosDados) => {
  const { senha, email } = autenticacao;
  const { usuarioEncontrado } = await procurarUsuario(email, senha);
  /*const consultaEncontrada = await Consultas.findOne({
    raw: true,
    where: {
      consulta_id: consultaId,
    },
  });*/

  //console.log(usuarioEncontrado);

  //console.log(usuarioEncontrado);

  if (usuarioEncontrado) {
    try {
      const dadosAModificar = {};
      const verificaoDados = { consulta_id: consultaId }; //para verificar se os dados a modificar já estão atribuido na coluna

      //verifica os dados que serão atualizados e atribui as chaves no objeto dadosAModificar
      //https://masteringjs.io/tutorials/fundamentals/foreach-object
      Object.keys(novosDados).forEach((chave) => {
        dadosAModificar[chave] = novosDados[chave];
        verificaoDados[chave] = novosDados[chave];
      });

      /*console.log(dadosAModificar);*/
      //console.log(verificaoDados);

      //verifica se os dados a serem atualizados já estão atribuidos na coluna
      const dadosJaAtribuidos = await Consultas.findOne({
        raw: true,
        where: verificaoDados,
      });

      if (dadosJaAtribuidos) {
        return {
          colunasAlteradas: false,
          mensagem: "Dados já atribuidos na coluna",
        };
      }

      const colunasAlteradas = await Consultas.update(dadosAModificar, {
        where: {
          consulta_id: consultaId,
        },
      });

      //colunasAlteradas[0] retorna o numero de colunas alteradas na query
      //retorna falso quando a coluna não for achada
      return colunasAlteradas[0] === 0
        ? {
            colunasAlteradas: false,
          }
        : {
            colunasAlteradas: true,
          };
    } catch (erro) {
      if (erro instanceof TypeError) {
        throw new Error("novosDados não pode ser undefined");
      }
    }
  } else {
    return {
      colunasAlteradas: false,
      mensagem: "Usuário não encontrado",
    };
  }
};

module.exports = atualizarConsulta;
