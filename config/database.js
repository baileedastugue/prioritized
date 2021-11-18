require('dotenv').config();
const { Sequelize } = require('sequelize');
const connection = new Sequelize(
  'prioritized',
  'postgres',
  `${process.env.POSTGRES_PW}`,
  {
    host: 'localhost',
    dialect: 'postgres',
  }
);

// test db
connection
  .authenticate()
  .then(() => console.log('Database connected...'))
  .catch((err) => console.log('Error: ' + err));

module.exports = connection;
