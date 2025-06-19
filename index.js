const express = require("express");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

dotenv.config();

const app = express();
app.use(bodyParser.json());

// 💛 This route is for home page
app.get("/", (req, res) => {
  res.send("Welcome to Spoorthy's Serverless Email API");
});

// 💌 This route is for sending email
app.post("/send", async (req, res) => {
  const { to, subject, text } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    text,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
    res.status(200).send("Email sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Error sending email");
  }
});

// 💻 Starting the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(Server running on port ${port});
});
