/* eslint-disable node/no-unsupported-features/es-syntax */
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
      defaultValue: false,
    },
    profile_pic: {
      type: DataTypes.STRING,
    },
    org_id: {
      type: DataTypes.UUID,
      references: { model: Organization, key: 'id' },
    },
    lunch_credit_balance: {
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
    bank_region: {
      type: DataTypes.STRING,
    },
    currency_code: {
      type: DataTypes.STRING,
      defaultValue: 'NGN',
    },
    currency: {
      type: DataTypes.STRING,
      defaultValue: 'Naira',
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

User.prototype.toJSON = function () {
  const values = { ...this.get() };
  delete values.password_hash;
  return values;
};

(async () => {
  await User.sync({ alter: true });
})();
module.exports = User;
