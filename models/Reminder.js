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

Reminder.belongsTo(User, {
  foreignKey: 'userId',
});
User.hasMany(Reminder, {
  foreignKey: 'userId',
});

module.exports = Reminder;
