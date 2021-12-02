require('dotenv').config();

import express, { urlencoded, json, static } from 'express';

let app = express();

let PORT = process.env.PORT || 5000;

app.use(urlencoded({ extended: true }));
app.use(json());
if (process.env.NODE_ENV === 'production') {
  app.use(static('client/build'));
}

app.use('/reminders', require('./routes/reminders'));
app.use('/events', require('./routes/events'));
app.use('/priorities', require('./routes/priorities'));
app.use('/schedule', require('./routes/schedule'));
app.use('/users', require('./routes/users'));
app.use('/auth', require('./routes/auth'));

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/client/build/index.html');
});

app.listen(PORT, () => {
  console.log('App running on localhost:' + PORT);
});
