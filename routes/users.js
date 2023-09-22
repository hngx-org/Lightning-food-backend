const express = require('express');

const router = express.Router();
const {
  getMe,
  getUserById,
  getAllUsers,
  updateUser,
  forgotPassword,
  resetPassword,
  deleteUser,
} = require('../controllers/userController');
const { auth } = require('../middlewares/auth');

// forgot password
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);
router.use(auth);

router.get('/me', getMe);
router.get('/:id', getUserById);
router.get('/', getAllUsers);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;

//I think the user routes should be named userRoutes.js instead of users.js
