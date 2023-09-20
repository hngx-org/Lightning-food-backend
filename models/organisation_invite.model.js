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
        type: DataTypes.STRING,
        allowNull: false,
      },
    expirationTimestamp: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP + INTERVAL 1 DAY'), 
      },
 
  });

  return orgInvites;
};