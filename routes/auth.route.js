const express = require('express');
const {
  createUser,
  loginUser,
  logoutUser,
  createOrgAndUser,
  forgotPassword,
  resetPassword,
} = require('../controllers/authController');
const { auth } = require('../middlewares/auth');

const router = express.Router();

router.post('/signup', createUser);
router.post('/login', loginUser);
router.post('/signup/org-user', createOrgAndUser);

// forgot password
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);

router.use(auth);
router.post('/logout', logoutUser);

module.exports = router;
