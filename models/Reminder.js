const Sequelize = require('sequelize');
const db = require('../config/database');

const Reminder = db.define('reminder', {
  title: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.STRING,
  },
});

module.exports = Reminder;
