const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');

const OrgLunchWallet = sequelize.define(
  'OrgLunchWallet',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    balance: {
      type: DataTypes.INTEGER,
      defaultValue: 1000,
    },
    org_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
  },
  {
    tableName: 'organization_lunch_wallets',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
);

module.exports = OrgLunchWallet;
