const nodemailer = require("nodemailer");
require("dotenv").config();

const { META_PASSWORD } = process.env;

const nodemailerConfig = {
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: "oleksii.puzanov@meta.ua",
    pass: META_PASSWORD,
  },
};

const sendEmail = async (data) => {
  const email = { ...data, from: "oleksii.puzanov@meta.ua" };
  const transport = nodemailer.createTransport(nodemailerConfig);
  await transport.sendMail(email);
  return true;
};

module.exports = sendEmail;