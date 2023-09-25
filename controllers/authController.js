/* eslint-disable camelcase */
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user.model');
const { createCustomError } = require('../errors/custom-errors');
const Organization = require('../models/organization.model');
const OrgLunchWallet = require('../models/org_lunch_wallet.model');
const { sendEmail } = require('./mailController');
const transporter = require('../middlewares/emailConfig');

const secretKey = process.env.JWT_SECRET_KEY;

async function validateEmail(req, res, next) {
  try {
    const { email } = req.body;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      throw createCustomError('Invalid email format', 400);
    }

    await sendEmail(email);

    next();
  } catch (error) {
    console.error(`Error sending email: ${error.message}`);
    next(createCustomError('Invalid email', 400));
  }
}

async function createUser(req, res, next) {
  try {
    const {
      first_name,
      last_name,
      email,
      phone,
      org_id,
      password,
      lunch_credit_balance,
      is_admin,
      bank_code,
      bank_name,
      bank_number,
    } = req.body;

    // Validate input data

    // if (!first_name || !last_name || !email || !password) {
    //   // TODO: truly validate data
    //   throw createCustomError('Missing required fields', 400);
    // }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = {
      first_name: first_name || 'John',
      last_name: last_name || 'Doe',
      email: req.email || email,
      phone,
      password_hash: hashedPassword,
      is_admin: is_admin || false,
      profile_pic: 'https://cdn-icons-png.flaticon.com/512/147/147142.png',
      org_id: req.org_id || org_id,
      lunch_credit_balance: lunch_credit_balance || 5000,
      bank_code,
      bank_name,
      bank_number,
    };

    const newUser = await User.create(user);

    return res.status(200).json({
      success: true,
      message: 'User registered successfully',
      data: {
        user: newUser,
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
        user: user,
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

async function createOrgAndUser(req, res, next) {
  try {
    const {
      first_name,
      last_name,
      email,
      phone,
      password,
      org_name,
      lunch_price,
      currency_code,
    } = req.body;

    // Validate input data
    // if (
    //   !first_name ||
    //   !last_name ||
    //   !email ||
    //   !password ||
    //   !org_name ||
    //   !lunch_price ||
    //   !currency_code
    // ) {
    //   // TODO: truly validate data
    //   throw createCustomError('Missing required fields', 400);
    // }

    if (!email || !password || !org_name || !lunch_price) {
      // TODO: truly validate data
      throw createCustomError('Missing required fields', 400);
    }

    // Create the organization
    const organization = await Organization.create({
      name: org_name,
      lunch_price,
      currency_code: currency_code || 'NGN',
    });

    const lunchWallet = await OrgLunchWallet.create({
      org_id: organization.id,
      balance: 10000,
    });

    // res.status(201).json({
    //   success: true,
    //   message: 'Organization and Lunch Wallet created successfully',
    //   data: { organization, lunchWallet },
    // });
    if (!organization || !lunchWallet) {
      throw createCustomError("Can't create organization", 400);
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = {
      first_name,
      last_name,
      email,
      phone,
      password_hash: hashedPassword,
      is_admin: true,
      org_id: organization.id,
      lunch_credit_balance: 10000,
    };

    const newUser = await User.create(user);
    delete newUser.password_hash;

    return res.status(200).json({
      success: true,
      message: 'Org and User registered successfully',
      data: {
        user: newUser,
        organization: organization.dataValues,
        lunchWallet: lunchWallet.dataValues,
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

async function forgotPassword(req, res, next) {
  const { email } = req.body;
  try {
    if (!email) {
      return res.status(400).json({
        success: false,
        message: 'Enter your email address',
      });
    }

    const user = await User.findOne({ where: { email } });

    if (!user) {
      throw createCustomError('User not found', 404);
    }

    const verificationCode = Math.floor(
      100000 + Math.random() * 900000,
    ).toString();

    // Send an email with the verification code
    const mailOptions = {
      from: process.env.MAIL_USER, // Your email address
      to: email, // User's email address
      subject: 'Password Reset',
      text: `Your password reset code is: ${verificationCode}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    await user.update({ refresh_token: verificationCode });
    // Assuming sendUserOtp returns the expected response object
    console.log(user);
    res.status(202).json({
      success: true,
      message: 'Password reset code sent successfully',
      data: {
        id: user.id,
        email: user.email,
      },
    });
  } catch (error) {
    next(createCustomError('Invalid email', 401));
  }
}

async function resetPassword(req, res, next) {
  const { token, password } = req.body;

  if (!token || !password) {
    return res.status(400).json({
      success: false,
      message: 'Missing required fields',
      data: null,
    });
  }
  try {
    const user = await User.findOne({ where: { refresh_token: token } });

    if (!user) {
      throw createCustomError('User not found', 404);
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    // Update the user's password
    await user.update({ password_hash: hashedPassword });

    await user.update({ refresh_token: null });

    await user.save();

    res.status(200).json({
      success: true,
      message: 'Password reset successfully',
      data: user,
    });
  } catch (error) {
    next(createCustomError('Invalid reset code', 400));
  }
}

module.exports = {
  validateEmail,
  createUser,
  loginUser,
  logoutUser,
  createOrgAndUser,
  forgotPassword,
  resetPassword,
};
