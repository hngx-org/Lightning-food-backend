const express = require('express');

const router = express.Router();
const {
  getAllLunch,
  //getLunchDetail,
  sendLunch,
  redeemGiftController,
} = require('../controllers/lunchControllers');
// const { giftLunch } = require('../controllers/giftLunchController');
//const { getLunchDetailsByUserId } = require('../controllers/lunchControllers');
const { auth } = require('../middlewares/auth');

// Add auth middleware
router.use(auth);

// Define a route to get lunch details by user ID
//router.get('/:userId', getLunchDetailsByUserId);

//GET all available lunches for a user
router.get('/', getAllLunch);

// Gift Launch
// router.post('/send', giftLunch);
router.post('/send', sendLunch);

// Redeem Launch
// router.post('/redeem', redeemGiftController);
router.post('/redeem', redeemGiftController);

// get lunch detail
//router.get('/:lunchId', getLunchDetail);

module.exports = router;
