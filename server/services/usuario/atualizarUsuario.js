const Usuarios = require("../../db/models/Usuarios");
const { procurarUsuario } = require("./procurarUsuario");

const atualizarUsuario = async (autenticacao, novosDados) => {
  const { senha, email } = autenticacao;
  const usuario = await procurarUsuario(email, senha);
  const usuarioEncontrado = usuario.usuarioEncontrado

  if (usuarioEncontrado) {
    try{
      const dadosAModificar = {};

      //verifica os dados que serão atualizados e atribui as chaves no objeto dadosAModificar
      //https://masteringjs.io/tutorials/fundamentals/foreach-object
      Object.keys(novosDados).forEach(
        (chave) => (dadosAModificar[chave] = novosDados[chave])
      );

      //query UPDATE
      //https://sequelize.org/docs/v6/core-concepts/model-querying-basics/#simple-update-queries
      await Usuarios.update(dadosAModificar, {
        where: {
          email: email,
          senha: senha,
        },
      });
  
      return true;
    } catch (TypeError) {
      throw new Error("novosDados não pode ser undefined")
    }
  } else {
    return false;
  }
};

/*const test = async () => {
  const teste = await atualizarUsuario({
    email: "teste@gmail.com",
    senha: "lol"
  }, {email: "crazy42@gmail.com"})

  console.log(teste);
}*/

//test()

module.exports = atualizarUsuario;
