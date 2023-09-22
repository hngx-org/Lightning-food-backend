/* eslint-disable camelcase */
const Organization = require('../models/organization.model');
const LunchWallet = require('../models/org_lunch_wallet.model');
const { createCustomError } = require('../errors/custom-errors');
const orgInvites = require('../models/organisation_invite.model');
const transporter = require('../middlewares/emailConfig');

// Create a new organization and user (Admin user only)
const createOrganization = async (req, res, next) => {
  try {
    const { name, lunch_price, currency_code } = req.body;

    // Validate input data
    if (!name || !currency_code) {
      throw createCustomError('Missing required fields', 400);
    }

    // Create the organization
    const organization = await Organization.create({
      name,
      lunch_price,
      currency_code,
    });

    const lunchWallet = await LunchWallet.create({
      org_id: organization.id,
      balance: 10000,
    });

    res.status(201).json({
      success: true,
      message: 'Organization and Lunch Wallet created successfully',
      data: { organization, lunchWallet },
    });
  } catch (error) {
    next(error);
  }
};

const sendInviteCode = async (req, res) => {
  const { email, organizationId } = req.body;

  // Generate a random verification code
  const verificationCode = Math.floor(
    100000 + Math.random() * 900000,
  ).toString();

  // Save the invitation details in the database
  console.log(email);
  await orgInvites.create({
    email: email,
    token: verificationCode,
    id: organizationId,
  });

  // Send an email with the verification code
  const mailOptions = {
    from: 'fredrickraymond2004@gmail.com', // Your email address
    to: email, // User's email address
    subject: 'Email Verification',
    text: `Your verification code is: ${verificationCode}`,
  };

  // Send the email
  await transporter.sendMail(mailOptions);

  res.status(200).json({
    success: true,
    message: 'Invitation sent successfully',
    data: null,
  });
};

const confirmInviteCode = async (req, res, next) => {
  try {
    const { email, verificationCode } = req.body;

    // Validate email and verification code
    if (!email || !verificationCode) {
      return res.status(400).json({
        success: false,
        message: 'Email and verification code are required.',
        data: null,
      });
    }

    // Verifing the verification code against the stored code in your database
    const user = await orgInvites.findOne({
      where: { email, token: verificationCode },
    });

    if (!user || user.token !== verificationCode) {
      return res.status(400).json({
        success: false,
        message: 'Invalid email or verification code.',
        data: null,
      });
    }

    // Mark the email as verified
    user.email = true;
    user.token = null; // Optional, clear the verification code from the database or not
    //  There is supposed to be a field where we set the state to be true once token is validated

    await user.save();

    res.status(200).json({
      success: true,
      message: 'Token verified',
      data: null,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Updates the organizational detail
 * @reaquires payload {"name":"org name", "lunch_price":100, "currency": "USD"}
 * @param {Express.Request} req
 * @param {Express.Response} res
 * @param {*} next
 */
const updateOrgDetails = async (req, res) => {
  const { name, lunchPrize, currency } = req.body;
  const { isAdmin, org_id } = req.user;

  if (!isAdmin) {
    throw createCustomError('This user is not an admin', 403);
  }

  const organization = await Organization.findByPk(org_id);

  organization.update({
    name: name,
    lunch_prize: lunchPrize,
    currency: currency,
  });

  res.json(organization).status(201);
};

module.exports = {
  sendInviteCode,
  confirmInviteCode,
  createOrganization,
  updateOrgDetails,
};
