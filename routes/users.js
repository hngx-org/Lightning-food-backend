const express = require('express');
const {
  createPasswordController,
} = require('../controllers/createPasswordController');

const router = express.Router();
const {
  getMe,
  getUserById,
  getAllUsers,
  updateUser,
  deleteUser,
} = require('../controllers/userController');
const { auth, adminUser } = require('../middlewares/auth');

router.use(auth);

router.get('/me', getMe);
router.get('/:id', getUserById);
router.get('/', getAllUsers);
router.put('/:id', updateUser);
router.patch('/update-password', createPasswordController);

router.use(adminUser);

router.delete('/:id', deleteUser);

module.exports = router;

//I think the user routes should be named userRoutes.js instead of users.js
