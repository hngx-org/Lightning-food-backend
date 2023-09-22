/* eslint-disable camelcase */
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user.model');
const { createCustomError } = require('../errors/custom-errors');
const Organization = require('../models/organization.model');
const OrgLunchWallet = require('../models/org_lunch_wallet.model');
const {sendEmail} = require('./mailController') 
const secretKey = process.env.JWT_SECRET_KEY;

async function validateEmail(req, res, next) {
  try {
    const email = req.body.email;
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
      lunch_credit_balance: lunch_credit_balance || 1000,
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
    // }

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

module.exports = { validateEmail, createUser, loginUser, logoutUser, createOrgAndUser };
