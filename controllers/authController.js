/* eslint-disable camelcase */
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user.model');
const { createCustomError } = require('../errors/custom-errors');
const Organization = require('../models/organization.model');
const OrgLunchWallet = require('../models/org_lunch_wallet.model');

const secretKey = process.env.JWT_SECRET_KEY;

async function createUser(req, res) {
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
      launch_credit_balance,
      refresh_token,
      bank_code,
      bank_name,
      bank_number,
    } = req.body;

    // Validate input data
    if (!first_name || !last_name || !email || !password || !phone) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields',
        data: null,
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      phone: req.body.phone,
      password_hash: hashedPassword,
      is_admin,
      profile_pic,
      org_id,
      launch_credit_balance,
      refresh_token,
      bank_code,
      bank_name,
      bank_number,
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
    return res.status(500).json({
      success: false,
      message: error.message,
      data: null,
    });
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
    //
    if (!email || !password || !org_name) {
      // TODO: truly validate data
      throw createCustomError('Missing required fields', 400);
    }

    // Create the organization
    const organization = await Organization.create({
      name: org_name,
      lunch_price,
      currency_code,
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
    console.log(organization.id);
    const user = {
      first_name,
      last_name,
      email,
      phone,
      password_hash: hashedPassword,
      is_admin: true,
      org_id: organization.id,
      lunch_credit_balance: 100000,
    };

    const newUser = await User.create(user);
    delete newUser.password_hash;

    const userWithoutPassword = Object.assign(newUser.toJSON);
    delete userWithoutPassword.password_hash;
    console.log(userWithoutPassword);

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
    console.log(error);
    next(error.message);
  }
}

module.exports = { loginUser, logoutUser, createOrgAndUser, createUser };
