const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');
const Organization = require('./organization.model');

const orgInvites = sequelize.define(
  'OrgInvites',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    token: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ttl: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: () => new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
    },
    org_id: {
      type: DataTypes.UUID,
      references: { model: Organization, key: 'id' },
      onDelete: 'CASCADE',
    },
    is_deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    tableName: 'organization_invites',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
);

module.exports = orgInvites;
