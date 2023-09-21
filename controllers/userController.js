/* eslint-disable camelcase */
const bcrypt = require('bcrypt'); // import bcrypt to hash password
const User = require('../models/user.model'); //import user model
const { createCustomError } = require('../errors/custom-errors');

// Controller function to get user/staff details by UUID
async function getUserById(req, res) {
  try {
    const userId = req.params.id;
    const user = await User.findOne({ where: { id: userId } });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
        data: null,
      });
    }

    res.status(200).json({
      success: true,
      message: 'User found',
      data: {
        user: user,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error',
      data: null,
    });
  }
}

// Controllers Function to register new user
async function createUser(req, res) {
  try {
    const {
      first_name,
      last_name,
      email,
      phone,
      password,
      isAdmin,
      profile_pic,
      org_id,
      launch_credit_balance,
      refresh_token,
      bank_code,
      bank_name,
      bank_number,
    } = req.body;

    // Validate input data
    if (!first_name || !last_name || !email || !password) {
      // TODO: truly validate data
      throw createCustomError('Missing required fields', 400);
      // return res.status(400).json({
      //   success: false,
      //   message: 'Missing required fields',
      //   data: null,
      // });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = {
      first_name,
      last_name,
      email,
      phone,
      password_hash: hashedPassword,
      isAdmin,
      profile_pic,
      org_id,
      launch_credit_balance,
      refresh_token,
      bank_code,
      bank_name,
      bank_number,
    };

    const newUser = await User.create(user);

    const userWithoutPassword = Object.assign(newUser.toJSON)
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
    console.error('error', error.errors[0].message); // Logging the error for debugging purposes

    if (error.name === 'SequelizeUniqueConstraintError') {
      // Unique constraint violation (duplicate email)
      let errorMessage = error.errors[0].message;
      errorMessage = errorMessage[0].toUpperCase() + errorMessage.slice(1);
      return res.status(400).json({
        success: false,
        message: errorMessage,
        data: null,
      });
    }

    return res.status(500).json({
      success: false,
      message: error.message,
      data: null,
    });
  }
}

module.exports = {
  getUserById,
  createUser,
};
