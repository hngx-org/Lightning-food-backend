const { CustomErrorClass } = require('../errors/custom-errors');

const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomErrorClass || err.message) {
    return res
      .status(err.statusCode || 401)
      .json({ success: false, message: err.message, data: null });
  }
  return res.status(500).json({
    success: false,
    message: 'Something went wrong, please try again',
    data: null,
  });
};

module.exports = errorHandlerMiddleware;
