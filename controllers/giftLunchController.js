/* eslint-disable camelcase */
// const { Op } = require('sequelize');
const Lunch = require('../models/lunches.model');
const User = require('../models/user.model');
const response = require('../utils/response');

const giftLunch = async (req, res) => {
  try {
    const userId = req.user.id;

    const { receiver_id, quantity, note } = req.body;

    if (!receiver_id || !quantity || !note)
      return res
        .status(400)
        .json(response(false, 'Missing required fields', null));

    const user = await User.findOne({ where: { id: userId } });

    if (!user)
      return res.status(404).json(response(false, 'User does not exist', null));

    const lunch = {
      sender_id: userId,
      receiver_id: receiver_id,
      quantity,
      note,
      redeemed: true,
    };

    // Create Launch
    const newLunch = await Lunch.create(lunch);

    const sender = await User.findOne({ where: { id: userId } });

    const receiver = await User.findOne({ where: { id: receiver_id } });

    const org = await user.getOrganization();

    //Update the sender's balance
    await sender.update({
      lunch_credit_balance:
        sender.lunch_credit_balance - quantity * org.lunch_price,
    });

    //Update the receiver's balance
    await receiver.update({
      lunch_credit_balance:
        receiver.lunch_credit_balance + quantity * org.lunch_price,
    });

    return res
      .status(201)
      .json(response(true, 'Lunch gifted successfully', { lunch: newLunch }));
  } catch (error) {
    return res.status(500).json(response(false, 'Internal Server Error', null));
  }
};

module.exports = { giftLunch };
