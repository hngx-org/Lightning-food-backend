/* eslint-disable camelcase */
const { Op } = require('sequelize');
const Lunch = require('../models/lunches.model');
const User = require('../models/user.model');
const Withdrawals = require('../models/withdrawals.model');
const { createCustomError } = require('../errors/custom-errors');
const Organization = require('../models/organization.model');

//GET endpoint to retrieve all available lunches for a user
const getAllLunch = async (req, res) => {
  const userId = req.user.id;

  try {
    //Query the lunch model to find available lunches for the user
    const allLunches = await Lunch.findAll({
      where: {
        [Op.or]: [{ sender_id: userId }, { receiver_id: userId }], //User is either the sender or receiver
      },
    });

    // Check if there are no lunches found
    if (!allLunches || allLunches.length === 0) {
      return res.status(200).json({
        success: true,
        message: 'No lunches found for this user',
        data: [],
      });
    }

    res.status(200).json({
      success: true,
      message: 'Lunches retrieved successfully',
      data: allLunches,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
      data: null,
    });
  }
};

const sendLunch = async (req, res) => {
  const { receiver_id, quantity, note } = req.body;

  try {
    console.log(
      'The user',
      req.user.id,
      'Rec:',
      receiver_id,
      'Qty:',
      quantity,
      'note:',
      note,
      'Org:',
      req.user.org_id,
    );
    //Create a new lunch
    const lunch = await Lunch.create({
      sender_id: req.user.id,
      receiver_id,
      org_id: req.user.org_id,
      quantity,
      note,
    });

    const org = await Organization.findOne({ where: { id: req.user.org_id } });
    const totalLunchPrice = org.lunch_price * (quantity || 1);

    // Find the sender and receiver
    const [sender, receiver] = await Promise.all([
      User.findOne({ where: { id: req.user.id } }),
      User.findOne({ where: { id: receiver_id } }),
    ]);

    // Check if the sender has enough balance
    if (sender.lunch_credit_balance < totalLunchPrice) {
      throw createCustomError('Insufficient balance.', 401);
    }
    // Debit the sender's balance
    await sender.update({
      lunch_credit_balance: sender.lunch_credit_balance - totalLunchPrice,
    });

    console.log('Total lunch costs ', totalLunchPrice);
    console.log(
      'Sender',
      sender.lunch_credit_balance,
      'Receiver',
      receiver.lunch_credit_balance,
    );
    // Credit the receiver's balance
    await receiver.update({
      lunch_credit_balance: receiver.lunch_credit_balance + totalLunchPrice,
    });

    console.log(
      'Sender',
      sender.lunch_credit_balance,
      'Receiver',
      receiver.lunch_credit_balance,
    );

    res.status(201).json({
      success: true,
      message: 'Lunch sent successfully',
      data: lunch,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
      data: null,
    });
  }
};

async function redeemGiftController(req, res) {
  try {
    const { id } = req.user;
    const { bank_number, bank_name, bank_code, amount, email } = req.body;

    if (!bank_number || !bank_name || !bank_code || !amount || !email) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields',
      });
    }

    const userWithdrawing = await User.findOne({ where: { bank_number } }); // for-refactoring find by email
    // validate user with bank if null save bank details to user table

    await userWithdrawing.decrement('lunch_credit_balance :', { by: amount });
    await userWithdrawing.save();
    const newEntry = await Withdrawals.create({
      id,
      user_id: userWithdrawing.id,
      amount,
      status: 'success',
    });

    const sender = await User.findOne({ where: { email } });
    const senderLunchEntry = await Lunch.findOne({
      where: { sender_id: sender.id },
    });
    await senderLunchEntry.update({ redeemed: true });
    await senderLunchEntry.save();

    res.status(201).json({
      message: 'Withdrawal request created successfully',
      statusCode: 201,
      data: {
        id: newEntry.id,
        user_id: User.id,
        status: 'success',
        amount,
        created_at: newEntry.created_at,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
      data: null,
    });
  }
}

async function getLunchDetailsByUserId(req, res, next) {
  try {
    const { userId } = req.params;
    // Use Sequelize to find the user's lunch details based on the provided user ID
    const lunchDetails = await Lunch.findOne({ where: { userId } });

    if (!lunchDetails) {
      // If no lunch details found for the user, return a 404 response
      return res
        .status(404)
        .json({ error: 'Lunch details not found for this user.' });
    }

    // Return the lunch details as JSON
    res.json({ userId, lunchDetails });
  } catch (error) {
    next(error);
  }
}

async function getLunchDetail(req, res, next) {
  try {
    const { lunchId } = req.params;
    // Use Sequelize to find the user's lunch details based on the provided user ID
    const lunchDetails = await Lunch.findByPk(lunchId);

    if (!lunchDetails) {
      // If no lunch details found for the user, return a 404 response
      throw createCustomError('Lunch details not found for this user.', 404);
    }

    // Return the lunch details as JSON
    res.json({ lunchDetails });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getAllLunch,
  sendLunch,
  redeemGiftController,
  getLunchDetailsByUserId,
  getLunchDetail,
};
