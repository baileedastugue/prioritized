const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const Reminder = require('../models/Reminder');
const User = require('../models/User');

// @route   GET reminders
// @desc    Get all reminders for user
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const userId = req.user.userId;
    const reminders = await Reminder.findAll({
      where: {
        userId: userId,
      },
      // include: [
      //   {
      //     model: User,
      //     where: { userId: userId },
      //   },
      // ],
    });
    if (reminders.length === 0) {
      res.status(400).json({
        msg: 'There are no reminders for this user',
      });
    } else {
      res.json(reminders);
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   POST reminders
// @desc    Post a new reminders for user
// @access  Private
router.post(
  '/',
  [auth, [check('title', 'A reminder title is required').not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { title, description, dateDue, dateCompleted, state } = req.body;
    const userId = req.user.userId;
    const reminderFields = {
      title,
      description,
      dateDue: new Date(dateDue),
      dateCompleted,
      state,
      userId,
    };
    try {
      const newReminder = await Reminder.create(
        { ...reminderFields },
        {
          include: [
            {
              model: User,
              where: { userId: userId },
            },
          ],
        }
      );
      res.json(newReminder);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

// @route   PUT reminders/:reminderId
// @desc    Update a reminder
// @access  Private
router.put('/:reminderId', [auth], async (req, res) => {
  const { title, description, dateDue, dateCompleted, state } = req.body;
  const reminderFields = {
    title,
    description,
    dateDue,
    dateCompleted,
    state,
  };
  try {
    const newReminder = await Reminder.update(
      { ...reminderFields },
      {
        where: {
          reminderId: req.params.reminderId,
        },
      }
    );
    res.json(newReminder);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   GET reminders/:reminderId
// @desc    Get a single reminder
// @access  Private
router.get('/:reminderId', auth, async (req, res) => {
  try {
    const userId = req.user.userId;
    const reminder = await Reminder.findByPk(req.params.reminderId, {
      where: {
        userId: userId,
      },
    });
    if (!reminder) {
      res.status(400).json({
        msg: 'This reminder does not exist',
      });
    }
    res.json(reminder);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   GET reminders/:reminderId
// @desc    Get a single reminder
// @access  Private
router.delete('/:reminderId', auth, async (req, res) => {
  try {
    const userId = req.user.userId;
    const reminder = await Reminder.destroy({
      where: {
        reminderId: req.params.reminderId,
        userId: userId,
      },
    });
    if (!reminder) {
      res.status(400).json({
        msg: 'This reminder does not exist and cannot be deleted',
      });
    }
    res.json(reminder);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
