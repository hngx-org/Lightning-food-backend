const express = require('express');
const {createPasswordController} = require('../controllers/createPasswordController');

const router = express.Router();
const {
  getMe,
  getUserById,
  getAllUsers,
  updateUser,
  deleteUser,
} = require('../controllers/userController');
const { auth } = require('../middlewares/auth');

router.use(auth);

router.get('/users/me', getMe);
router.get('/users/:id', getUserById);
router.patch('/update-password', createPasswordController);
router.get('/users/', getAllUsers);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

// forgot password
router.post('/users/forgot-password', forgotPassword);
router.post('/users/reset-password', resetPassword);

module.exports = router;

//I think the user routes should be named userRoutes.js instead of users.js
