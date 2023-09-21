const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');

const User = require('./user.model');
const Organization = require('./organization.model');

const Lunch = sequelize.define(
  'Lunch',
  {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
    },
    org_id: {
      type: DataTypes.UUID,
      references: { model: Organization, key: 'id' },
    },
    senderId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: { model: User, key: 'id' },
    },
    receiverId: {
      type: DataTypes.UUID,
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
// launch.user
Lunch.belongsTo(User, {
  foreignKey: 'receiverId',
});

// foreign key to user from sender to allow usage like
// launch.user
Lunch.belongsTo(User, {
  foreignKey: 'senderId',
});
module.exports = Lunch;
