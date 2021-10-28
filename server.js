require('dotenv').config();

const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const logger = require('morgan');

let app = express();

let PORT = process.env.PORT || 5000;
app.use(logger('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.use(
  session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true,
  })
);

var MONGODB_URI = process.env.MONGODB_URI;
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));


app.listen(PORT, () => {
  console.log('App running on localhost:' + PORT);
});