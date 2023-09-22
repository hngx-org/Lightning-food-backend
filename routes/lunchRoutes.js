const express = require('express');

const router = express.Router();
const lunchControllers = require('../controllers/lunchControllers');
const { giftLunch } = require('../controllers/giftLunchController');
const { getLunchDetailsByUserId } = require('../controllers/lunchControllers');
const { auth } = require('../middlewares/auth');

// Add auth middleware
router.use(auth);

// Define a route to get lunch details by user ID
router.get('/:userId', getLunchDetailsByUserId);

//GET all available lunches for a user
router.get('/', lunchControllers.getAllLunch);

// Gift Launch
router.post('/send', giftLunch);

// get lunch detail
router.get('/:lunchId', lunchControllers.getLunchDetail);

module.exports = router;
