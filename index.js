const nodemailer = require('nodemailer');

// STEP 1: Set up transporter using your Gmail and app password
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'hlspoorthy@gmail.com', // your Gmail
    pass: 'tnioicvwliqclvhr'       // your 16-char app password (NO SPACES)
  }
});

// STEP 2: Compose the email content
const mailOptions = {
  from: 'hlspoorthy@gmail.com',                 // same as above
  to: 'samrudhhl2000@gmail.com',                // recipient email
  subject: 'Hello from Node.js 👋',
  text: 'Hi baby! 💌 This is your test email from Node.js. Proud of you!'
};

// STEP 3: Send the email
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log('❌ Error:', error);
  } else {
    console.log('✅ Email sent successfully:', info.response);
  }
});