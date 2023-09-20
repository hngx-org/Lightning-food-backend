const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const orgInvites = sequelize.define('OrgInvites', {
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
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    expirationTimestamp: {
      type: DataTypes.DATE,
    },
  });

  return orgInvites;
};