const { DataTypes } = require('sequelize');
const User = require('./user.model');
const sequelize = require('../db/db');

const Withdrawal = sequelize.define(
  'Withdrawal',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: 'id',
      },
      onDelete: 'CASCADE',
    },
    status: {
      type: DataTypes.ENUM('redeemed', 'not_redeemed'),
      allowNull: false,
    },
    amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    is_deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    tableName: 'withdrawals',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
);

Withdrawal.belongsTo(User);

module.exports = Withdrawal;
