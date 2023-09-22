const express = require('express');

const router = express.Router();
const {
  getAllLunch,
  getLunchDetail,
  sendLunch,
} = require('../controllers/lunchControllers');
// const { giftLunch } = require('../controllers/giftLunchController');
const { getLunchDetailsByUserId } = require('../controllers/lunchControllers');
const { auth } = require('../middlewares/auth');

// Add auth middleware
router.use(auth);

// Define a route to get lunch details by user ID
router.get('/:userId', getLunchDetailsByUserId);

//GET all available lunches for a user
router.get('/', getAllLunch);

// Gift Launch
// router.post('/send', giftLunch);
router.post('/send', sendLunch);

// get lunch detail
router.get('/:lunchId', getLunchDetail);

module.exports = router;
