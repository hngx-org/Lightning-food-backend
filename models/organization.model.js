const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');

const Organization = sequelize.define(
  'Organization',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lunch_price: {
      type: DataTypes.DECIMAL(10, 2),
      defaultValue: 1000,
      allowNull: false,
    },
    currency_code: {
      type: DataTypes.STRING(4),
      allowNull: false,
    },
    is_deleted: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    tableName: 'organizations',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
);
module.exports = Organization;
