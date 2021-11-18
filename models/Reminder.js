const Sequelize = require('sequelize');
const db = require('../config/database');

const Reminder = db.define('reminder', {
  username: {
    type: Sequelize.STRING,
    unique: false,
  },
  title: {
    type: Sequelize.STRING,
    unique: false,
  },
  description: {
    type: Sequelize.STRING,
    unique: false,
  },
  date_due: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
    unique: false,
  },
  date_completed: {
    type: Sequelize.DATE,
    unique: false,
  },
  completed: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    unique: false,
  },
  date_completed: {
    type: Sequelize.DATE,
    unique: false,
  },
});

module.exports = Reminder;
