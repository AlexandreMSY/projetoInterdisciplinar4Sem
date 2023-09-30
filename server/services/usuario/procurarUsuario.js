const Usuarios = require("../../db/models/Usuarios");

const procurarUsuario = async (email, senha) => {
    const usuariosEncontrados = await Usuarios.findAndCountAll({
        where: {
            email: email,
            senha: senha
        }
    })

    return usuariosEncontrados
}

module.exports = {
    procurarUsuario
}