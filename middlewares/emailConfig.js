// emailConfig.js
// eslint-disable-next-line import/no-extraneous-dependencies
const nodemailer = require('nodemailer');

// Create a transporter object for sending email
const transporter = nodemailer.createTransport({
  service: 'Gmail', // e.g., 'Gmail', 'Outlook', etc.
  auth: {
    user: 'hngx.teamlightning@gmail.com', // Your email address
    pass: 'esinzlxwubssbhkt', // Your email password or app-specific password
  },
});

module.exports = transporter;
