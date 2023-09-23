/* eslint-disable camelcase */
const User = require('../models/user.model'); //import user model
const { createCustomError } = require('../errors/custom-errors');
const { sendUserOtp } = require('./mailController');

async function getMe(req, res, next) {
  try {
    const user = await User.findOne({ where: { id: req.user.id } });

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

async function getUserById(req, res, next) {
  try {
    const userId = req.params.id;
    const user = await User.findOne({ where: { id: userId } });

    if (!user) {
      throw createCustomError('User not found', 404);
    }

    res.status(200).json({
      success: true,
      message: 'User found',
      data: {
        user: user,
      },
    });
  } catch (error) {
    next(error);
  }
}

// Controllers Function to register new user
async function createUser(req, res) {
  try {
    const { first_name, last_name, email, phone, password } = req.body;

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
    };

    const newUser = await User.create(user);
    delete newUser.password_hash;

    res.status(200).json({
      success: true,
      message: 'User registered successfully',
      data: {
        user: newUser,
      },
    });
  } catch (error) {
    if (error.name === 'SequelizeUniqueConstraintError') {
      // Unique constraint violation (duplicate email)
      return res.status(400).json({
        success: false,
        message: 'Email already exists',
        data: null,
      });
    }
  }
}

return res.status(500).json({
  success: false,
  message: error.message,
  data: null,
});
async function getAllUsers(req, res, next) {
  try {
    const users = await User.findAll({
      where: { org_id: req.user.org_id },
    });

    res.status(200).json({
      success: true,
      message: 'List of all users',
      data: {
        users: users,
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
async function deleteUser(req, res, next) {
  try {
    const userId = req.params.id;

    // Check if the user exists
    const user = await User.findOne({ where: { id: userId } });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
        data: null,
      });
    }

    // Delete the user
    await user.destroy();

    res.status(200).json({
      success: true,
      message: 'User deleted successfully',
      data: null,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error',
      data: null,
    });
  }
}

async function updateUser(req, res, next) {
  try {
    const userId = req.params.id;
    const {
      first_name,
      last_name,
      email,
      profile_pic,
      bank_name,
      bank_code,
      bank_number,
    } = req.body;

    // Check if the user exists
    const user = await User.findOne({ where: { id: userId } });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
        data: null,
      });
    }

    // Update user's information
    user.first_name = first_name || user.first_name;
    user.last_name = last_name || user.last_name;
    user.email = email || user.email;
    user.profile_pic = profile_pic || user.profile_pic;
    user.bank_name = bank_name || user.bank_name;
    user.bank_code = bank_code || user.bank_code;
    user.bank_number = bank_number || user.bank_number;

    await user.save();

    res.status(200).json({
      success: true,
      message: 'User updated successfully',
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

async function forgotPassword(req, res, next) {
  const { email } = req.body;
  if (!email) {
    return res.status(404).json({
      success: false,
      message: 'User not found',
    });
  }

  const user = await User.findOne({ where: { email } });
  if (!user) {
    throw createCustomError('Invalid credentials', 404);
  }

  const response = await sendUserOtp(user.id, email);

  let status = 500;
  if (response.status === true) {
    status = 202;
  }

  res.status(status).json(response);
}

async function resetPassword(req, res) {
  const { email, otp, password } = req.body;
  if (!(email && otp && password)) {
    return res.status(404).json({
      success: false,
      message: 'User not found',
    });
  }

  const user = await User.findOne({ where: { email } });
  if (!user) {
    throw createCustomError('Invalid credentials', 404);
  }

  // const response = await verifyOtp(user.id, otp)

  // update password
  user.password = password;
  await user.save();

  res.status(200).json({
    success: true,
    message: 'Password reset successfully',
    data: null,
  });
}

module.exports = {
  getMe,
  getUserById,
  getAllUsers,
  updateUser,
  deleteUser,
  forgotPassword,
  resetPassword,
  createUser,
};
