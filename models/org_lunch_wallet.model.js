const { DataTypes, Sequelize } = require('sequelize');

module.exports = (sequelize) => {
  const OrgLunchWallet = sequelize.define('OrgLunchWallet', {
    id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    balance: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    org_id: {
      type: DataTypes.UUID, 
      defaultValue: Sequelize.UUIDV4, 
      allowNull: false,
    },
  });

  sequelize.sync();

  return OrgLunchWallet;
};
