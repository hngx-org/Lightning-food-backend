/* eslint-disable camelcase */
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const { createCustomError } = require('../errors/custom-errors');
const User = require('../models/user.model');

dotenv.config();
async function auth(req, res, next) {
  try {
    let token = req.header('Authorization');

    if (!token) {
      throw new Error('Token is missing'); // Handle missing token
    }

    token = token.replace('Bearer ', ''); // Remove 'Bearer ' from the token string
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    const user = await User.findByPk(decoded.id);

    if (!user) {
      throw new Error('User not found'); // Handle user not found
    }

    req.user = user; // Store the user object in the request
    req.token = token;

    next(); // Call next() to continue with the next middleware
  } catch (error) {
    console.error(error.message);
    next(error); // Pass the error to the error handling middleware (if available)
  }
}

/**
 * checks if the user is an admin user
 * @requires auth middleware be added first
 * @param {Express.Request} req
 * @param {Express.Response} res
 * @param {*} next
 */
function adminUser(req, res, next) {
  const { is_admin } = req.user;
  try {
    if (!is_admin) {
      throw createCustomError('Not admin user', 403);
    }
    next();
  } catch (error) {
    next(error);
  }
}
module.exports = { auth, adminUser };
