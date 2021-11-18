const Sequelize = require('sequelize');
const db = require('../config/database');

const Priority = db.define('priority', {
  lifeSegment: {
    type: Sequelize.STRING,
    unique: false,
  },
  priorityLevel: {
    type: Sequelize.INTEGER,
    unique: false,
  },
});

module.exports = Priority;
