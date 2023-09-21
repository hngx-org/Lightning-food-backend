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
const auth = require('../middlewares/auth');

router.post('/auth/signup', createUser);
router.post('/auth/login', loginController);

router.get('/users/me', auth, getMe);
router.get('/users/:id', getUserById);
router.get('/users/', auth, getAllUsers);
router.put('/users/:id', auth, updateUser);
router.delete('/users/:id', auth, deleteUser);

module.exports = router;

//I think the user routes should be named userRoutes.js instead of users.js
