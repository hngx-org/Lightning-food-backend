/* eslint-disable camelcase */
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const { createCustomError } = require('../errors/custom-errors');
const  User  = require('../models/user.model');

dotenv.config();
async function auth(req, res, next) {
  try {
    const token = req.header('Authorization').replace('Bearer ', ''); // Remove 'Bearer ' from the token string

    if (!token) {
      throw new Error('Token is missing'); // Handle missing token
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    const user = await User.findByPk(decoded.id);

    if (!user) {
      throw new Error('User not found'); // Handle user not found
    }

    req.user = user; // Store the user object in the request
    req.token = token;

    next(); // Call next() to continue with the next middleware
  } catch (error) {
<<<<<<< HEAD
    next(error);
    //switch to  next(error) after error middleware have been created
=======
    console.error(error.message);
    next(error); // Pass the error to the error handling middleware (if available)
>>>>>>> 346a61d84ba8d12abff31149f8502567c63e6d0c
  }
}

// const requireAuth = async(req, res, next) => {

//   // verifying authentication
//   const { authorization } = req.headers

//   if(!authorization) {
//       return res.status(401).json({error: "Authorization token required"})
//   }

//   const token = authorization.split(' ')[1]

//   try{
//    const { id } = jwt.verify(token, process.env.JWT_SIGNATURE)
//    req.user = await User.findByPk({ id })
//    next()
//   }
//   catch (error) {
//       // console.log(error)
//       res.status(401).json({error: "Request is not authorized"})
//   }
// }

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
