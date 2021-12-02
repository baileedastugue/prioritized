require('dotenv').config();
// const { Sequelize } = require('sequelize');
// const connection = new Sequelize(
//   'prioritized',
//   'postgres',
//   `${process.env.POSTGRES_PW}`,
//   {
//     host: 'localhost',
//     dialect: 'postgres',
//   }
// );
const { Sequelize } = require('sequelize');
connection = new Sequelize(process.env.DATABASE_URL, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

// test db
connection
  .authenticate()
  .then(() => console.log('Database connected...'))
  .catch((err) => console.log('Error: ' + err));

module.exports = connection;
