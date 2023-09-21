const express = require('express');

const router = express.Router();
const { sendLunch, getAllLunch } = require('../controllers/lunchControllers');

//GET all available lunches for a user
router.get('/lunch/all', getAllLunch);
router.post('/lunch/send', sendLunch);

module.exports = router;
