const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Users = require('./users');

const Lunches = sequelize.define('Lunches', {
  id: {
    type: DataTypes.STRING(255),
    primaryKey: true,
  },
  senderId: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  receiverId: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  redeemed: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  note: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

// Define associations
Lunches.belongsTo(Users, { foreignKey: 'senderId' });
Lunches.belongsTo(Users, { foreignKey: 'receiverId' });

module.exports = Lunches;
