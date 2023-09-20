/* eslint-disable camelcase */
const Organization = require('../models/organization.model');
const LunchWallet = require('../models/org_lunch_wallet.model');
const { createCustomError } = require('../errors/custom-errors');

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
      message: 'Organization and admin user created successfully',
      data: { organization, lunchWallet },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { createOrganization };
