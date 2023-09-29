require("dotenv").config();
const criarUsuario = require("../../services/usuario/criarUsuario");

//POST
const registrarUsuario = async (req, res) => {
  const { nome, senha, email, telefone, dataNascimento } = req.body;

  try{
    const sucesso = await criarUsuario({
      nome: nome,
      senha: senha,
      email: email,
      telefone: telefone,
      dataNascimento: dataNascimento,
    });
  
    console.log(sucesso);

    if(sucesso){
      res.status(200).json({sucesso: sucesso, mensagem: "Usuario criado com sucesso"})
    }
  } catch (error) {
    //console.log(error);
    res.status(400).json({sucesso: false, mensagem: error.message})
  }
};

module.exports = {
  registrarUsuario,
};
