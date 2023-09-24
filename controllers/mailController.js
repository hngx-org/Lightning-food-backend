// import bcrypt from "bcryptjs"
const dotenv = require('dotenv');
// const { transport } = require('../config/nodemailerConfig.js');

const { transport } = {};

dotenv.config();
// const teamMail = process.env.TEAM_MAIL;

const issueOtp = async () => {
  const otp = `${Math.floor(1000 + Math.random() * 9000)}`;
  // const saltRounds = 12; //This should be in environment variable

  //   const hashedOTP = await bcrypt.hash(otp, saltRounds);

  //Save hased otp with userId and email for confirmation purposes
  //Hased OTP should be saved to db for confirmation later,then deleted upon successful authentication

  return {
    userOtp: otp,
    timeLeft: `1 hour`,
  };
};

const otpMessage = (otp, timeLeft) => {
  const template = `
        <div style="max-width: 700px;text-align: center;background: #f4f8fd;
         margin:auto; border: 10px solid #ddd; padding: 50px 20px; font-size: 110%;">
         <h2 style="color: #FF7F50;">Welcome to XXXX 2.0</h2>
          <div style="text-align:center ; color:black;"><br>
          <h3 style="color: teal;">Your OTP is ${otp}</h3>
          <h4 style="color: teal;">It expires in ${timeLeft}</h4>
          </div>
       </div>
          `;
  return template;
};

// Function to send email with otp code
const sendEmail = async (email, message) => {
  const mailOptions = {
    from: process.env.MAIL_USER, //This should be in environement variable
    subject: 'Verify your email',
    to: email,
    html: message,
  };

  return new Promise((resolve, reject) => {
    transport.sendMail(mailOptions, (err, info) => {
      if (err) reject(err);
      resolve(info);
    });
  });
};

const sendUserOtp = async (userId, email) => {
  try {
    if (!userId || !email) {
      return {
        status: false,
        message: `User details cannot be empty`,
      };
    }

    //generate a new otp
    const otp = await issueOtp(userId, email);
    const message = otpMessage(otp.userOtp, otp.timeLeft);

    //send mail with otp details
    await sendEmail(email, message);

    return {
      status: true,
      message: 'otp sent successfully',
      data: null,
    };
  } catch (error) {
    return {
      status: false,
      message: `internal server error`,
    };
  }
};

module.exports = {
  issueOtp,
  otpMessage,
  sendEmail,
  sendUserOtp,
};

//call this function to test controller
// sendUserOtp('1','test@example.com')
