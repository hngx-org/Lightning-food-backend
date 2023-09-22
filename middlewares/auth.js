const jwt = require('jsonwebtoken');
const { User } = require('../models/user.model');

async function auth(req, res, next) {
  try {
    const token = req.header('Authorization').replace('Bearer ', ''); // Remove 'Bearer ' from the token string

    if (!token) {
      throw new Error('Token is missing'); // Handle missing token
    }

    const decoded = jwt.verify(token, process.env.JWT_SIGNATURE);

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

module.exports = auth;
