require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./config/database');

let app = express();

let PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.get('/', (req, res) => res.send('INDEX'));

app.use('/reminders', require('./routes/reminders'));
app.use('/users', require('./routes/users'));
app.use('/auth', require('./routes/auth'));

// db.sync();

app.listen(PORT, () => {
  console.log('App running on localhost:' + PORT);
});
