const { DataTypes } = require('sequelize');
const db = require('../db/db');
const User = require('./user.model');

const Lunch = db.define(
  'Lunch',
  {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
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
  { tableName: 'launches', createdAt: 'created_at', updatedAt: false },
);
// foreign key to user from receiver to allow usage like
// launch.user
Lunch.belongsTo(User, {
  foreignKey: 'recieverId',
});

// foreign key to user from sender to allow usage like
// launch.user
Lunch.belongsTo(User, {
  foreignKey: 'senderId',
});
module.exports = Lunch;
