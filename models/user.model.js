const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');

const Organization = require('./organization.model');

const User = sequelize.define(
  'User',
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
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
      type: DataTypes.STRING,
      unique: true,
    },
    is_admin: {
      type: DataTypes.BOOLEAN,
    },
    profile_pic: {
      type: DataTypes.STRING,
    },
    org_id: {
      type: DataTypes.UUID,
      references: { model: Organization, key: 'id' },
    },
    launch_credit_balance: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
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
  },
  {
    tableName: 'users',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
);

User.belongsTo(Organization, {
  foreignKey: 'org_id',
  as: 'organization',
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
