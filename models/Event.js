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
  userId: {
    type: Sequelize.UUID,
    require: true,
    allowNull: false,
    references: {
      model: 'User',
      key: 'userId',
    },
    onDelete: 'CASCADE',
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
  lifeSegment: {
    type: Sequelize.STRING,
    defaultValue: 'Unassigned',
    unique: false,
  },
  priorityLevel: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
    unique: false,
  },
});

Event.belongsTo(User, {
  foreignKey: 'userId',
});
User.hasMany(Event, {
  foreignKey: 'userId',
  as: 'userEvent',
});

module.exports = Event;
