const express = require('express');
const userLoginController = require('../controllers/userLoginController');
const { createUser } = require('../controllers/userController');
const auth = require('../middlewares/auth');
const createPasswordController = require('../controllers/createPasswordController');

const router = express.Router();

router.post('/login', userLoginController);
router.post('/user/signup', createUser);
router.post('/user/create-password', auth, createPasswordController);

module.exports = router;
