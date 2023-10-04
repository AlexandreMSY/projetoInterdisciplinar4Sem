const { Sequelize } = require("sequelize");
require("dotenv").config();

const dbConexao = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
  }
);

const sync = async () => {
  const db = dbConexao;
  db.sync()
}

module.exports = {
  dbConexao,
  sync
};
