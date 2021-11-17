const { Sequelize } = require('sequelize');
module.exports = new Sequelize(
  'prioritized',
  'postgres',
  `${process.env.POSTGRES_PW}`,
  {
    host: 'localhost',
    dialect: 'postgres',
  }
);
