const express = require('express');
const router = express.Router();
const lunchControllers = require("../controllers/lunchControllers");


//GET all available lunches for a user
router.get('/user/:userId/lunch/all', lunchControllers.getAllLunch);



module.exports = router;