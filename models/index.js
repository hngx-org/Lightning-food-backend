const Sequelize = require('sequelize');

const connection = new Sequelize({
  dialect: 'mysql',
});

const Lunch = connection.define('Lunch', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },
  org_id: {
    type: Sequelize.TEXT,
    references: {
      model: 'Users',
      key: 'org_id',
    },
  },
  sender_id: {
    type: Sequelize.TEXT,
    references: {
      model: 'Users',
      key: 'id',
    },
  },
  receiver_id: {
    type: Sequelize.TEXT,
    references: {
      model: 'Users',
      key: 'id',
    },
  },
  quantity: {
    type: Sequelize.INTEGER,
  },
  redeemed: {
    type: Sequelize.TINYINT,
  },
  created_at: {
    type: Sequelize.DATE,
  },
  note: {
    type: Sequelize.TEXT,
  },
});

module.exports = {
  Lunch,
};
