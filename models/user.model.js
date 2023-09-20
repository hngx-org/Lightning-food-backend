const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  password_hash: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.INTEGER,
    unique: true,
  },
  isAdmin: {
    type: DataTypes.BOOLEAN,
  },
  profile_pic: {
    type: DataTypes.STRING,
  },
  org_id: {
    type: DataTypes.STRING,
  },
  launch_credit_balance: {
    type: DataTypes.STRING,
  },
  refresh_token: {
    type: DataTypes.STRING,
  },
  bank_code: {
    type: DataTypes.STRING,
  },
  bank_name: {
    type: DataTypes.STRING,
  },
  bank_number: {
    type: DataTypes.STRING,
  },
});

// Set up a default scope to exclude 'password_hash'
User.addHook('afterFind', (users) => {
  if (!Array.isArray(users)) {
    // If it's a single instance, exclude 'password_hash'
    delete users.dataValues.password_hash;
  } else {
    // If it's an array of instances, exclude 'password_hash' for each instance
    users.forEach((user) => {
      delete user.dataValues.password_hash;
    });
  }
});

module.exports = User;
