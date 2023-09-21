const { Sequelize } = require('sequelize');
require('dotenv').config();

const HOST = process.env.MYSQL_ADDON_URI;
const DB = process.env.MYSQL_ADDON_DB;
const USER = process.env.MYSQL_ADDON_USER;
const PORT = process.env.MYSQL_ADDON_PORT;
const PASSWORD = process.env.MYSQL_ADDON_PASSWORD;
const URI = process.env.MYSQL_ADDON_URI;
const DIALECT = process.env.MYSQL_ADDON_DIALECT;

// const sequelize = new Sequelize(HOST, DB, USER, PASSWORD, URI, DIALECT);
const sequelize = new Sequelize({
  database: DB,
  username: USER,
  password: PASSWORD,
  host: HOST, // Change this to your database host
  dialect: DIALECT, // Change this to your database dialect (e.g., 'mysql', 'sqlite', 'mssql', etc.)
});

module.exports = sequelize;
