const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

async function auth(req, res, next) {
  try {
    const token = req.header('Authorization').replace('Bearer', '');

    const decoded = jwt.decode(token, process.env.JWT_SIGNATURE);

    const user = await User.findByPk(decoded.id);

    if (!user) {
      //this should be updated after custom errors have been implemented
      throw new Error('User not Authenticated');
    }

    req.user = user.dataValues;
    req.token = token;
  } catch (error) {
    console.log(error.message);
    //switch to  next(error) after error middleware have been created
  }
}

module.exports = auth;
