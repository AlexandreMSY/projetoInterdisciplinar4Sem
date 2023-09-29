const { dbConexao } = require("../dbConexao");
const { DataTypes } = require("sequelize");

const Usuarios = dbConexao.define(
  "Usuarios",
  {
    usuario_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    senha: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    telefone: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true,
    },
    data_nascimento: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Usuarios
