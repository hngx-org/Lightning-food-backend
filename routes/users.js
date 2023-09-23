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
  createUser,
} = require('../controllers/userController');
const { auth, adminUser } = require('../middlewares/auth');

// forgot password
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);

router.use(auth);

router.post('/sigup', createUser);
router.get('/me', getMe);
router.get('/:id', getUserById);
router.get('/', getAllUsers);
router.put('/:id', updateUser);

router.use(adminUser);

router.delete('/:id', deleteUser);

module.exports = router;

//I think the user routes should be named userRoutes.js instead of users.js
