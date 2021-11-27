const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { Op } = require('sequelize');

const Event = require('../models/Event');
const Reminder = require('../models/Reminder');
const User = require('../models/User');
const { sequelize } = require('../models/Reminder');

// @route   GET /schedule/:year/:month/:day
// @desc    Get all tasks for day
// @access  Private
router.get('/:startDate/:endDate', auth, async (req, res) => {
  const newDate = new Date(req.params.startDate);
  const nextDate = new Date(req.params.endDate);
  try {
    const userId = req.user.userId;
    const allPriorities = await User.findAll({
      where: {
        userId: userId,
      },
      attributes: { exclude: ['password'] },
      include: [
        {
          model: Reminder,
          as: 'userReminder',
          required: false,
          where: {
            dateDue: {
              [Op.gte]: newDate,
              [Op.lt]: nextDate,
            },
          },
        },
        {
          model: Event,
          as: 'userEvent',
          required: false,
          where: {
            timeStart: {
              [Op.gte]: newDate,
              [Op.lt]: nextDate,
            },
          },
        },
      ],
    });
    if (
      allPriorities[0].dataValues.userEvent.length === 0 &&
      allPriorities[0].dataValues.userReminder.length === 0
    ) {
      res.status(400).json({
        msg: 'There are no tasks for this date',
      });
    } else {
      res.json(allPriorities);
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   GET /schedule/:year/:month
// @desc    Get all tasks for month
// @access  Private
router.get('/:year/:month/', auth, async (req, res) => {
  const { year, month } = req.params;
  const firstDay = new Date(`${year} ${parseInt(month)} 1`);
  const lastDay = new Date(year, parseInt(month), 0);
  console.log(firstDay, lastDay);
  try {
    const userId = req.user.userId;
    const allPriorities = await User.findAll({
      where: {
        userId: userId,
      },
      attributes: { exclude: ['password'] },
      include: [
        {
          model: Reminder,
          where: {
            userId: userId,
            [Op.and]: [
              sequelize.where(
                sequelize.fn('date', sequelize.col('dateDue')),
                '>=',
                firstDay
              ),
              sequelize.where(
                sequelize.fn('date', sequelize.col('dateDue')),
                '<=',
                lastDay
              ),
            ],
          },
        },
        {
          model: Event,
          where: {
            userId: userId,
            [Op.and]: [
              sequelize.where(
                sequelize.fn('date', sequelize.col('timeStart')),
                '>=',
                firstDay
              ),
              sequelize.where(
                sequelize.fn('date', sequelize.col('timeStart')),
                '<=',
                lastDay
              ),
            ],
          },
        },
      ],
    });
    if (allPriorities.length === 0) {
      res.status(400).json({
        msg: 'There are no tasks for this month',
      });
    } else {
      res.json(allPriorities);
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
