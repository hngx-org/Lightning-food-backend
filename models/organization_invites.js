const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const OrganizationInvites = sequelize.define('OrganizationInvites', {
  id: {
    type: DataTypes.STRING(255),
    primaryKey: true,
  },
  email: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  token: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  TTL: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

module.exports = OrganizationInvites;
