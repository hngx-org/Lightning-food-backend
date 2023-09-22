const express = require('express');

const router = express.Router();
const lunchControllers = require('../controllers/lunchControllers');
const { giftLunch } = require('../controllers/giftLunchController');
const { getLunchDetailsByUserId } = require('../controllers/lunchControllers');

// Define a route to get lunch details by user ID
router.get('/lunch/:userId', getLunchDetailsByUserId);

//GET all available lunches for a user
router.get('/user/:userId/lunch/all', lunchControllers.getAllLunch);

// Gift Launch
router.post('/gift_lunch', giftLunch);

module.exports = router;
