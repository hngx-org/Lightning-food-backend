const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.URI, {
  dialect: 'mysql',
});

module.exports = sequelize;
