const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const OrgLunchWallet = sequelize.define('OrgLunchWallet', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    balance: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    org_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
  });

  sequelize.sync();

  return OrgLunchWallet;
};
