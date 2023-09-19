const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Organization = require('./organization');

const OrganizationLunchWallet = sequelize.define('OrganizationLunchWallet', {
  id: {
    type: DataTypes.STRING(255),
    primaryKey: true,
  },
  balance: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  org_id: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
});

// Define associations
OrganizationLunchWallet.belongsTo(Organization, { foreignKey: 'org_id' });

module.exports = OrganizationLunchWallet;
