const express = require('express');
const userLoginController = require('../controllers/userLoginController');
const { createUser } = require('../controllers/userController');

const router = express.Router();

router.post('/login', userLoginController);
router.post('/user/signup', createUser);

module.exports = router;
