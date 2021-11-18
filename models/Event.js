const Sequelize = require('sequelize');
const db = require('../config/database');
const User = require('./User');

const Event = db.define('event', {
  eventId: {
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
  timeStart: {
    type: Sequelize.DATE,
    unique: false,
  },
  timeEnd: {
    type: Sequelize.DATE,
    unique: false,
  },
});

// User.hasMany(Event);
Event.belongsTo(User, {
  foreignKey: 'userId',
});

module.exports = Event;
