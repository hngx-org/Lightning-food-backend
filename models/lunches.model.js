const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');

const User = require('./user.model');
const Organization = require('./organization.model');

const Lunch = sequelize.define(
  'Lunch',
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
    },
    org_id: {
      type: DataTypes.INTEGER,
      references: { model: Organization, key: 'id' },
    },
    sender_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: User, key: 'id' },
    },
    receiver_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: User, key: 'id' },
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    redeemed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    note: {
      type: DataTypes.TEXT,
    },
  },
  { tableName: 'lunches', createdAt: 'created_at', updatedAt: false },
);
// foreign key to user from receiver to allow usage like
// lunch.user
Lunch.belongsTo(User, {
  foreignKey: 'reciever_id',
});

// foreign key to user from sender to allow usage like
// lunch.user
Lunch.belongsTo(User, {
  foreignKey: 'sender_id',
});
module.exports = Lunch;
