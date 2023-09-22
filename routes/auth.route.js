const express = require('express');
const {
  createUser,
  loginUser,
  logoutUser,
} = require('../controllers/authController');

const router = express.Router();

router.post('/signup', createUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);

module.exports = router;
