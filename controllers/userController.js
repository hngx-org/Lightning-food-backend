/* eslint-disable camelcase */
const bcrypt = require('bcrypt'); // import bcrypt to hash password
const User = require('../models/user.model'); //import user model

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
      return res.status(400).json({
        success: false,
        message: 'Missing required fields',
        data: null,
      });
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

    res.status(200).json({
      success: true,
      message: 'User registered successfully',
      data: {
        user: newUser,
      },
    });
  } catch (error) {
    console.error(error); // Logging the error for debugging purposes

    if (error.name === 'SequelizeUniqueConstraintError') {
      // Unique constraint violation (duplicate email)
      return res.status(400).json({
        success: false,
        message: 'Email already exists',
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
