const express = require('express');
const {
  createUser,
  loginUser,
  logoutUser,
} = require('../controllers/authController');

const router = express.Router();

router.post('/auth/signup', createUser);
router.post('/auth/login', loginUser);
router.post('/auth/logout', logoutUser);

module.exports = router;
