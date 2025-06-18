'use strict';
const nodemailer = require('nodemailer');

module.exports.sendEmail = async (event) => {
  const { to, subject, text } = JSON.parse(event.body);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'hlspoorthy@gmail.com',
      pass: 'pnnmowxurjxbepsl', // use app password, not Gmail password
    },
  });

  const mailOptions = {
    from: 'hlspoorthy@gmail.com',
    to,
    subject,
    text,
  };

  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully' }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Email sending failed', error }),
    };
  }
};