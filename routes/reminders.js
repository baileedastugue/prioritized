const express = require('express');
const router = express.Router();
const db = require('../config/connection');
const Reminder = require('../models/Reminder');

// Get all reminders
router.get('/', (req, res) =>
  Reminder.findAll()
    .then((reminders) => {
      console.log(reminders);
      res.sendStatus(200);
    })
    .catch((err) => console.log(err))
);

// Add a reminder
// router.get('/add', (req, res) => {
//   const data = {
//     title: 'start the BE',
//     description: 'routes, models, and schemas',
//     date_due: '2021-11-21',
//     date_completed: '2021-11-17',
//     email: 'baileedast@gmail.com',
//     completed: true,
//   };
//   let { title, description, date_due, completed, date_completed, username } =
//     data;

//   // insert into table
//   Reminder.create({
//     title,
//     description,
//     date_due,
//     completed,
//     date_completed,
//     username,
//   })
//     .then((reminder) => res.redirect('/reminders'))
//     .catch((err) => console.log(err));
// });

module.exports = router;
