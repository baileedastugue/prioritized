const Sequelize = require('sequelize');
const db = require('../config/database');

const Event = db.define('event', {
  eventId: {
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
  time_start: {
    type: Sequelize.TIME,
    defaultValue: Sequelize.NOW,
    unique: false,
  },
  time_end: {
    type: Sequelize.TIME,
    unique: false,
  },
});

module.exports = Event;
