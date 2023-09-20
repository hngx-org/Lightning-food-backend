class CustomErrorClass extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

const createCustomError = (message, statusCode) =>
  new CustomErrorClass(message, statusCode);

module.exports = { createCustomError, CustomErrorClass };
