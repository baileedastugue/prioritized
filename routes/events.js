const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const Event = require('../models/Event');
const User = require('../models/User');

// @route   GET events
// @desc    Get all events for user
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const userId = req.user.userId;
    const events = await Event.findAll({
      include: [
        {
          model: User,
          where: { userId: userId },
          attributes: { exclude: ['password'] },
        },
      ],
    });
    if (events.length === 0) {
      res.status(400).json({
        msg: 'There are no events for this user',
      });
    } else {
      res.json(events);
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   POST events
// @desc    Create a new event for user
// @access  Private
router.post(
  '/',
  [auth, [check('title', 'An event title is required').not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { title, description, timeStart, timeEnd } = req.body;
    const userId = req.user.userId;
    const eventFields = {
      title,
      description,
      userId,
      timeStart,
      timeEnd,
    };
    try {
      const newEvent = await Event.create(
        { ...eventFields },
        {
          include: [
            {
              model: User,
              where: { userId: userId },
            },
          ],
        }
      );
      res.json(newEvent);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

// @route   PUT events/:eventId
// @desc    Update an event
// @access  Private
router.put('/:eventId', auth, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { title, description, timeStart, timeEnd } = req.body;
  const eventFields = {
    title,
    description,
    timeStart,
    timeEnd,
  };
  try {
    const newEvent = await Event.update(
      { ...eventFields },
      {
        where: {
          eventId: req.params.eventId,
        },
      }
    );
    res.json(newEvent);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   GET events/:eventId
// @desc    Get a single event
// @access  Private
router.get('/:eventId', auth, async (req, res) => {
  try {
    const userId = req.user.userId;
    const event = await Event.findByPk(req.params.eventId, {
      where: {
        userId: userId,
      },
    });
    if (!event) {
      res.status(400).json({
        msg: 'This event does not exist',
      });
    }
    res.json(event);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   GET events/:eventId
// @desc    Get a single event
// @access  Private
router.delete('/:eventId', auth, async (req, res) => {
  try {
    const userId = req.user.userId;
    const event = await Event.destroy({
      where: {
        eventId: req.params.eventId,
        userId: userId,
      },
    });
    if (!event) {
      res.status(400).json({
        msg: 'This event does not exist and cannot be deleted',
      });
    }
    res.json(event);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
