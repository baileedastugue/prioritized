const Sequelize = require('sequelize');
const db = require('../config/database');

const User = db.define('user', {
  username: {
    type: Sequelize.STRING,
    unique: true,
  },
  password: {
    type: Sequelize.STRING,
    unique: false,
  },
  first_name: {
    type: Sequelize.STRING,
    unique: false,
  },
  last_name: {
    type: Sequelize.STRING,
    unique: false,
  },
});

module.exports = User;
