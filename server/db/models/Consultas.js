const { dbConexao } = require("../dbConexao");
const { DataTypes } = require("sequelize");
const Usuarios = require("./Usuarios");

const Consultas = dbConexao.define(
  "Consultas",
  {
    consulta_id: {
      type: DataTypes.CHAR(36),
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    usuario_id: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      references: {
        model: Usuarios,
        key: "usuario_id",
      },
    },
    data_hora: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    especialidade: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    observacoes: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    timestamps: false,
  }
);

Usuarios.hasMany(Consultas);

module.exports = Consultas;
