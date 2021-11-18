const Sequelize = require('sequelize');
const db = require('../config/database');
const User = require('./User');

const Reminder = db.define('reminder', {
  reminderId: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    unique: true,
    require: true,
    primaryKey: true,
  },
  title: {
    type: Sequelize.STRING,
    unique: false,
  },
  description: {
    type: Sequelize.STRING,
    unique: false,
  },
  dateDue: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
    unique: false,
  },
  dateCompleted: {
    type: Sequelize.DATE,
    unique: false,
  },
  state: {
    type: Sequelize.STRING,
    defaultValue: 'Not started',
    unique: false,
  },
});

Reminder.belongsTo(User, {
  foreignKey: 'userId',
});

module.exports = Reminder;
