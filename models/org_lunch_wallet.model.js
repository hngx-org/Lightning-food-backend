const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');
const Organization = require('./organization.model');

const OrgLunchWallet = sequelize.define(
  'OrgLunchWallet',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    balance: {
      type: DataTypes.DECIMAL(10, 2),
      defaultValue: 1000,
      allowNull: false,
    },
    org_id: {
      type: DataTypes.INTEGER,
      references: { model: Organization, key: 'id' },
    },
  },
  {
    tableName: 'organization_lunch_wallets',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
);

module.exports = OrgLunchWallet;
