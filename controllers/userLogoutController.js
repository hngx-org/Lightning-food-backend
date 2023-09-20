const jwt = require('jsonwebtoken');
const { createCustomError } = require('../errors/custom-errors');

const logoutController = (req, res) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');

    jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (!token) {
      createCustomError('User is not logged in.', 401);
    }

    return res.status(200).json({ message: 'User logged out successfully.' });
  } catch (error) {
    return res.status(200).json({ message: 'User logged out successfully.' });
  }
};

module.exports = logoutController;
