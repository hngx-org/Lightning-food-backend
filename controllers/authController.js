/* eslint-disable camelcase */
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user.model');
const { createCustomError } = require('../errors/custom-errors');
const Invite = require('../models/organisation_invite.model');
// const { sendUserOtp } = require('./mailController');

const secretKey = process.env.JWT_SECRET_KEY;

async function createUser(req, res, next) {
  try {
    const {
      first_name,
      last_name,
      email,
      phone,
      password,
      is_admin,
      profile_pic,
      org_id,
      lunch_credit_balance,
      refresh_token,
      bank_code,
      bank_name,
      bank_number,
      token,
    } = req.body;

    // Validate input data

    if (!first_name || !last_name || !email || !password || !token) {
      // TODO: truly validate data
      throw createCustomError('Missing required fields', 400);
    }

    // Check if the token is valid and retrieve org_id
    const invite = await Invite.findOne({ where: { token } });

    if (!invite || new Date() > invite.ttl) {
      throw createCustomError('Invalid or expired invitation token', 400);
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = {
      first_name,
      last_name,
      email,
      phone,
      password_hash: hashedPassword,
      is_admin,
      profile_pic,
      org_id,
      lunch_credit_balance,
      refresh_token,
      bank_code,
      bank_name,
      bank_number,
    };

    const newUser = await User.create(user);
    delete newUser.password_hash;

    const userWithoutPassword = Object.assign(newUser.toJSON);
    delete userWithoutPassword.password_hash;
    console.log(userWithoutPassword);

    return res.status(200).json({
      success: true,
      message: 'User registered successfully',
      data: {
        user: userWithoutPassword,
      },
    });
  } catch (error) {
    if (error.name === 'SequelizeUniqueConstraintError') {
      // Unique constraint violation (duplicate email)
      let errorMessage = error.errors[0].message;
      errorMessage = errorMessage[0].toUpperCase() + errorMessage.slice(1);
      next(createCustomError(errorMessage, 400));
    }
    next(error.message);
  }
}

const loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      throw createCustomError('Fill all required fields', 400);
    }

    console.log(1);
    const user = await User.findOne({ where: { email } });
    if (!user) {
      throw createCustomError('Invalid credentials', 404);
    }

    const isPasswordValid = await bcrypt.compare(password, user.password_hash);

    if (!isPasswordValid) {
      throw createCustomError('Invalid credentials', 401);
    }

    const token = jwt.sign({ id: user.id }, secretKey, {
      expiresIn: '1h',
    });

    // Sending the token in the response

    return res.status(200).json({
      message: 'User authenticated successfully',
      statusCode: 200,
      data: {
        access_token: token,
        email: user.email,
        id: user.id,
        isAdmin: user.is_admin,
      },
    });
  } catch (error) {
    next(error);
  }
};

const logoutUser = (req, res) => {
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

module.exports = { createUser, loginUser, logoutUser };
