const Sequelize = require('sequelize');
const db = require('../config/connection');

const Reminder = db.define('reminder', {
  reminderId: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    unique: true,
    require: true,
    primaryKey: true,
  },
  userId: {
    type: Sequelize.UUID,
    unique: true,
    require: true,
    primaryKey: false,
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
