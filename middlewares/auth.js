const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const { createCustomError } = require('../errors/custom-errors')

async function auth(req, res, next) {
  try {
    const token = req.header('Authorization').replace('Bearer', '');

    const decoded = jwt.decode(token, process.env.JWT_SIGNATURE);

    const user = await User.findByPk(decoded.id);

    if (!user) {
      //this should be updated after custom errors have been implemented
      throw createCustomError('Access Denied', 401);
    }

    req.user = user.dataValues;
    req.token = token;
  } catch (error) {
    next(error)
  }
}

module.exports = auth;
