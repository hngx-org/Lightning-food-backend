const bcrypt = require('bcrypt');
const User = require('../models/user.model');
const { createCustomError } = require('../errors/custom-errors');

const createPasswordController = async (req, res, next) => {
  const { user } = req;
<<<<<<< HEAD
  const { confirm_password, password } = req.body;
=======
  const { confirmPassword, password } = req.body;
>>>>>>> ab3f5c8fe9c0c9adac8b84cb3de300eeed4195aa

  try {
    if (confirmPassword !== password) {
      const passwordMismatchError = createCustomError(
        'Passwords do not match',
        400,
      );
      return next(passwordMismatchError);
    }

    if (!confirmPassword || !password) {
      const missingFieldsError = createCustomError(
        'Fill all required fields',
        400,
      );
      return next(missingFieldsError);
    }

    const existingUser = await User.findOne({ where: { email: user.email } });
    if (!existingUser) {
      const invalidCredentialsError = createCustomError(
        'Invalid credentials',
        404,
      );
      return next(invalidCredentialsError);
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    existingUser.password_hash = hashedPassword;
    await existingUser.save();

    return res.status(200).json({
      message: 'Password created successfully',
      statusCode: 200,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = createPasswordController;
