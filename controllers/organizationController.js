/* eslint-disable camelcase */
const Organization = require('../models/organization.model');
const LunchWallet = require('../models/org_lunch_wallet.model');
const { createCustomError } = require('../errors/custom-errors');
const orgInvites = require('../models/organisation_invite.model');

const { generateUniqueToken, sendInvitationEmail } = {
  generateUniqueToken: '',
  sendInvitationEmail: '',
};

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

async function sendInvite(req, res, next) {
  try {
    const { email, organizationId } = req.body;

    // Generate a unique token for the invitation (you can use a library like `uuid` for this)
    const invitationToken = generateUniqueToken();

    // Save the invitation details in the database
    await orgInvites.create({
      email,
      token: invitationToken,
      organization_id: organizationId,
    });

    // Send an email to the user with the invitation link (including the token)
    await sendInvitationEmail(email, invitationToken);

    res.status(200).json({
      success: true,
      message: 'Invitation sent successfully',
      data: null,
    });
  } catch (error) {
    next(error);
  }
}

module.exports = { sendInvite, createOrganization };
