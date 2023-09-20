const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');

const Organization = sequelize.define(
  'Organization',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lunch_price: {
      type: DataTypes.DECIMAL,
      defaultValue: 2000,
      allowNull: false,
    },
    currency_code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'organizations',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
);
module.exports = Organization;
