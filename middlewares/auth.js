const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const { createCustomError } = require('../errors/custom-errors');

const secretKey = process.env.JWT_SECRET_KEY;

async function auth(req, res, next) {
  try {
    const token = req.header('Authorization');

    if (!token || !token.startsWith('Bearer ')) {
      // Token is missing or not in the correct format
      throw createCustomError(
        'Authentication failed: Missing or invalid token',
        401,
      );
    }

    const tokenValue = token.replace('Bearer ', '');

    jwt.verify(tokenValue, secretKey, (err, decoded) => {
      if (err) {
        throw createCustomError('Invalid token', 401);
      }

      // Token is valid, you can access `decoded.id` to get the user ID

      User.findByPk(decoded.id)
        .then((user) => {
          if (!user) {
            throw createCustomError('User not authenticated', 401);
          }

          req.user = user.dataValues;
          req.token = tokenValue;
          next();
        })
        .catch((error) => {
          throw createCustomError(error.message, 500);
        });
    });
  } catch (error) {
    next(error);
  }
}

module.exports = auth;
