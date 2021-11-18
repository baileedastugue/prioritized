const Sequelize = require('sequelize');
const db = require('../config/database');
const Reminder = require('./Reminder');
const Event = require('./Event');

const User = db.define('user', {
  userId: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    unique: true,
    require: true,
    primaryKey: true,
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    require: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: Sequelize.STRING,
    unique: false,
    require: true,
    validate: {
      len: [6],
    },
  },
  firstName: {
    type: Sequelize.STRING,
    unique: false,
    require: true,
  },
  lastName: {
    type: Sequelize.STRING,
    unique: false,
    require: true,
  },
});

module.exports = User;
