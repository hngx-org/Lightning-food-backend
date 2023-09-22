const express = require('express');

const router = express.Router();
<<<<<<< HEAD
const lunchControllers = require('../controllers/lunchControllers');
const { giftLunch } = require('../controllers/giftLunchController');
//const { getLunchDetailsByUserId } = require('../controllers/lunchControllers');
=======
const {
  getAllLunch,
  getLunchDetail,
  sendLunch,
} = require('../controllers/lunchControllers');
// const { giftLunch } = require('../controllers/giftLunchController');
const { getLunchDetailsByUserId } = require('../controllers/lunchControllers');
>>>>>>> 894762640d3b9aaded80ae114a4be6c831aeaa39
const { auth } = require('../middlewares/auth');

// Add auth middleware
router.use(auth);

// Define a route to get lunch details by user ID
<<<<<<< HEAD
//.get('/lunch/:userId', getLunchDetailsByUserId);
=======
router.get('/:userId', getLunchDetailsByUserId);
>>>>>>> 894762640d3b9aaded80ae114a4be6c831aeaa39

//GET all available lunches for a user
router.get('/', getAllLunch);

// Gift Launch
// router.post('/send', giftLunch);
router.post('/send', sendLunch);

// get lunch detail
<<<<<<< HEAD
//router.get('/:lunchId', lunchControllers.getLunchDetail);

// Define a route to get lunch details by user ID
//router.get('/user/:userId', getLunchDetailsByUserId);
=======
router.get('/:lunchId', getLunchDetail);
>>>>>>> 894762640d3b9aaded80ae114a4be6c831aeaa39

module.exports = router;
