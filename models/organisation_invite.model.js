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
      defaultValue: DataTypes.NOW, // Set the default value to the current timestamp
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
    hooks: {
      beforeUpdate: (instance) => {
        // Calculate the new ttl value (current timestamp + 1 day)
        const oneDayInMilliseconds = 24 * 60 * 60 * 1000; // 1 day in milliseconds
        const newTtl = new Date(Date.now() + oneDayInMilliseconds);

        // Update the ttl value
        instance.ttl = newTtl;
      },
    },
  },
);

module.exports = orgInvites;
