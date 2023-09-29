const { dbConexao } = require("../dbConexao");

const Consultas = dbConexao.define(
  "Consultas",
  {
    consulta_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    paciente_paciente_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: false,
      references: {
        model: Paciente,
        key: "paciente_id",
      },
    },
    data_hora_marcada: {
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

module.exports = Consultas;
