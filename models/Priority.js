const Sequelize = require('sequelize');
const db = require('../config/database');

const Priority = db.define('priority', {
  life_segment: {
    type: Sequelize.STRING,
    unique: false,
  },
  priority_level: {
    type: Sequelize.INTEGER,
    unique: false,
  },
});

module.exports = Priority;
