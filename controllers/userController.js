const bcrypt = require('bcryptjs'); // import bcrypt to hash password
const { User } = require('../models/user.model'); //import user model

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
    const salt = await bcrypt.genSalt(10);
    const user = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      phone: req.body.phone,
      password_hash: await bcrypt.hash(req.body.password_hash, salt),
      isAdmin: req.body.isAdmin,
      profile_pic: req.body.profile_pic,
      org_id: req.body.org_id,
      launch_credit_balance: req.body.launch_credit_balance,
      refresh_token: req.body.refresh_token,
      bank_code: req.body.bank_code,
      bank_name: req.body.bank_name,
      bank_number: req.body.bank_number,

    };
    const newUser = await User.create(user);

    res.status(200).json({
      success: true,
      message: 'User Registered successfully',
      data: {
        user: newUser,
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

module.exports = {
  getUserById,
  createUser,
};
