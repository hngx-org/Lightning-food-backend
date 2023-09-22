const express = require('express');
const {
  createUser,
  loginUser,
  logoutUser,
  createOrgAndUser,
} = require('../controllers/authController');

const router = express.Router();

router.post('/signup', createUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);
router.post('/signup/org-user', createOrgAndUser);

module.exports = router;
