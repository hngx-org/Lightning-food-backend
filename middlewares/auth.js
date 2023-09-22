const dotenv = require('dotenv');

const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const { createCustomError } = require('../errors/custom-errors');

dotenv.config();
async function auth(req, res, next) {
  try {
    const token = req.header('Authorization').replace('Bearer', '').trim();
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    const user = await User.findByPk(decoded.id);

    if (!user) {
      //this should be updated after custom errors have been implemented
      throw createCustomError('Access Denied', 401);
    }

    req.user = user.dataValues;
    req.token = token;
    next();
  } catch (error) {
    next(error);
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
  const { isAdmin } = req.user;
  try {
    if (!isAdmin) {
      throw createCustomError('Not admin user', 403);
    }
    next();
  } catch (error) {
    next(error);
  }
}
module.exports = { auth, adminUser };
