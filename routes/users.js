const express = require('express');

const router = express.Router();
const {
  getUserById,
  createUser,
  getAllUsers,
  updateUser,
  deleteUser,
} = require('../controllers/userController');

router.get('/:id', getUserById);
router.get('/', getAllUsers);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

// Create a new user
router.post('/signup', createUser);

module.exports = router;

//I think the user routes should be named userRoutes.js instead of users.js
