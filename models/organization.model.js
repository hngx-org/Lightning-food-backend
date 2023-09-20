const { DataTypes, Sequelize } = require('sequelize');

module.export = (sequelize) => {
  const Organization = sequelize.define('Organization', {
    id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.VARCHAR,
      allowNull: false,
    },
    lunch_price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    currency: {
      type: DataTypes.VARCHAR,
      allowNull: false,
    },
  });
  // Sync the model with the database (create the table if it doesn't exist)
  sequelize.sync();
  return Organization;
};
