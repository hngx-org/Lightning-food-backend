const express = require('express');

const router = express.Router();
const { getUserById } = require('../controllers/userController');
const { createUser } = require('../controllers/userController');

/* GET users listing. */
router.get('/', (req, res) => {
  res.send('respond with a resource');
});

// GET get user or staff details by ID
router.get('/:id', getUserById);

// Create a new user
router.post('/api/register', createUser);

module.exports = router;

//I think the user routes should be named userRoutes.js instead of users.js
