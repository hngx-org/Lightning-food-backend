const User = require('../models/user.model');
const Withdrawals = require('../models/withdrawals.model');
const { createCustomError } = require('../errors/custom-errors');

async function withdrawCashController(req, res, next) {
  try {
    const { id } = req.user;

    // eslint-disable-next-line camelcase
    const { bank_number, bank_name, bank_code, amount } = req.body;

    // eslint-disable-next-line camelcase
    if (!bank_number || !bank_name || !bank_code || !amount) {
      throw createCustomError('Please provide required field', 401);
    }

    const userWithdrawing = await User.findByPk(id); // for-refactoring find by email
    // validate user with bank if null save bank details to user table

    // eslint-disable-next-line camelcase
    userWithdrawing.update({ bank_number, bank_name, bank_code });

    if (
      !userWithdrawing.lunch_credit_balance ||
      userWithdrawing.lunch_credit_balance === 0 ||
      userWithdrawing.lunch_credit_balance < amount
    ) {
      throw createCustomError('Insufficient balance', 401);
    }
    await userWithdrawing.decrement('lunch_credit_balance', { by: amount });
    await userWithdrawing.save();
    const newEntry = await Withdrawals.create({
      id,
      user_id: id,
      status: 'redeemed',
      amount,
    });
    

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
    next(error);
  }
}

async function withdrawalHistory(req, res, next) {
  try {
    const { id } = req.user;

    const withDrawals = await Withdrawals.findAll({ where: { user_id: id } });

    res.status(200).json({
      message: 'Withdraw History',
      statusCode: 200,
      data: withDrawals,
    });
  } catch (error) {
    next(error);
  }
}

module.exports = { withdrawCashController, withdrawalHistory };
