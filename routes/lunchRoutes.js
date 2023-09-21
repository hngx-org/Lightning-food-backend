const express = require('express');

const router = express.Router();
const lunchControllers = require('../controllers/lunchControllers');
const { giftLunch } = require('../controllers/giftLunchController');

//GET all available lunches for a user
router.get('/user/:userId/lunch/all', lunchControllers.getAllLunch);

// Gift Launch
router.post('/gift_lunch', giftLunch)

module.exports = router;
