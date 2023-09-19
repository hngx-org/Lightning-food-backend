const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const OrganizationInvites = require('./organization_invites');

const Organization = sequelize.define('Organization', {
  id: {
    type: DataTypes.STRING(255),
    primaryKey: true,
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  lunch_price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  currency: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

// Define associations
Organization.belongsTo(OrganizationInvites, { foreignKey: 'id' });

module.exports = Organization;
