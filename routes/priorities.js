const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { Op } = require('sequelize');

const Event = require('../models/Event');
const Reminder = require('../models/Reminder');
const User = require('../models/User');

// @route   GET priorities
// @desc    Get all priorities >0 from user
// @access  Private
router.get('/', auth, async (req, res) => {
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
            priorityLevel: {
              [Op.gt]: 0,
            },
          },
        },
        {
          model: Event,
          where: {
            priorityLevel: {
              [Op.gt]: 0,
            },
          },
        },
      ],
    });
    if (allPriorities.length === 0) {
      res.status(400).json({
        msg: 'There are no priorities assigned',
      });
    } else {
      res.json(allPriorities);
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   GET priorities/level/:priorityLevel
// @desc    Get all priorities of a certain level from user
// @access  Private
router.get('/level/:priorityLevel', auth, async (req, res) => {
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
            priorityLevel: {
              [Op.eq]: req.params.priorityLevel,
            },
          },
        },
        {
          model: Event,
          where: {
            priorityLevel: {
              [Op.eq]: req.params.priorityLevel,
            },
          },
        },
      ],
    });
    if (allPriorities.length === 0) {
      res.status(400).json({
        msg: 'There are no priorities of this level',
      });
    } else {
      res.json(allPriorities);
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   GET priorities/segment/:lifeSegment
// @desc    Get all tasks of a certain life segment
// @access  Private
router.get('/segment/:lifeSegment', auth, async (req, res) => {
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
            lifeSegment: {
              [Op.eq]: req.params.lifeSegment,
            },
          },
        },
        {
          model: Event,
          where: {
            lifeSegment: {
              [Op.eq]: req.params.lifeSegment,
            },
          },
        },
      ],
    });
    if (allPriorities.length === 0) {
      res.status(400).json({
        msg: 'There are no tasks in this segment',
      });
    } else {
      res.json(allPriorities);
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   GET priorities/segment/:lifeSegment/level/:priorityLevel
// @desc    Get all tasks of a certain life segment and priority level
// @access  Private
router.get(
  '/segment/:lifeSegment/level/:priorityLevel',
  auth,
  async (req, res) => {
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
              lifeSegment: {
                [Op.eq]: req.params.lifeSegment,
              },
              priorityLevel: {
                [Op.eq]: req.params.priorityLevel,
              },
            },
          },
          {
            model: Event,
            where: {
              lifeSegment: {
                [Op.eq]: req.params.lifeSegment,
              },
              priorityLevel: {
                [Op.eq]: req.params.priorityLevel,
              },
            },
          },
        ],
      });
      if (allPriorities.length === 0) {
        res.status(400).json({
          msg: 'There are no tasks of this level for this segment',
        });
      } else {
        res.json(allPriorities);
      }
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
