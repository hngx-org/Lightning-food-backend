const express = require('express');

const router = express.Router();
const {
  getMe,
  getUserById,
  createUser,
  getAllUsers,
  updateUser,
  deleteUser,
} = require('../controllers/userController');
const loginController = require('../controllers/userLoginController');
const logoutController = require('../controllers/userLogoutController');

router.post('/auth/signup', createUser);
router.post('/auth/login', loginController);
router.post('/auth/logout', logoutController);
router.get('/users/me', getMe);
router.get('/users/:id', getUserById);
router.get('/users/', getAllUsers);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

module.exports = router;

//I think the user routes should be named userRoutes.js instead of users.js
