const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user.model');
const { createCustomError } = require('../errors/custom-errors')



const secretKey = process.env.JWT_SECRET_KEY;






const loginController = async (req, res,next) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      throw createCustomError('Invalid credentials', 404)
    }

    const isPasswordValid = await bcrypt.compare(password, user.password_hash);

    if (!isPasswordValid) {
      throw createCustomError('Invalid credentials', 401)
    }

    const token = jwt.sign({ id: user.id }, secretKey, {
      expiresIn: '1h',
    });


    // Sending the token in the response

    return res.status(200).json({
      message: "User authenticated successfully",
      statusCode: 200,
      data: {
        access_token: token,
        email: user.email,
        id: user.id,
        isAdmin: user.is_admin
      }
    })
  } catch (error) {
    next(error)

  }
};

module.exports = loginController;
