const express = require('express');

const router = express.Router();
const { getUserById } = require('../controllers/userController');

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

// GET get user or staff details by ID
router.get('/:id', getUserById);

module.exports = router;

//I think the user routes should be named userRoutes.js instead of users.js
