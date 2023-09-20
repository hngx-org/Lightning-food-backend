import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();


export const transport = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: 'team.lightning.hng@gmail.com', //This should be in environment variable
    pass: 'rfnx htnk iaus yapv' //This should be in environment variable
  },
  tls: {
    rejectUnauthorized: false,
  },
});