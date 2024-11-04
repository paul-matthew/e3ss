import fetch from 'node-fetch';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import nodemailer from 'nodemailer';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

dotenv.config();

const app = express();
const PORT = 5000;
const emailUser = process.env.EMAIL_USER;
const emailPass = process.env.EMAIL_PASS;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.json());
app.use(cors());

// Configure nodemailer with your email provider's SMTP settings
const transporter = nodemailer.createTransport({
  service: 'gmail', // Example: 'gmail'
  auth: {
    user: emailUser,
    pass: emailPass,
  },
});

// Endpoint to handle subscription using Mailjet
app.post('/subscribe', async (req, res) => {
  const { email } = req.body;

  try {
    const mailjetApiKey = process.env.MAILJET_API_KEY;
    const mailjetApiSecret = process.env.MAILJET_API_SECRET;
    const contactListId = process.env.MAILJET_CONTACT_LIST_ID;

    const response = await fetch(`https://api.mailjet.com/v3/REST/contactslist/${contactListId}/managemanycontacts`, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${Buffer.from(`${mailjetApiKey}:${mailjetApiSecret}`).toString('base64')}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "Action": "addnoforce",
        "Contacts": [
          { "Email": email }
        ]
      })
    });

    if (response.ok) {
      // Send a success status with a message
      res.status(200).json({ message: 'Subscription successful!' });
    } else {
      // Send an error status with a message
      res.status(response.status).json({ message: 'Failed to subscribe. Please try again.' });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'An error occurred. Please try again.' });
  }
});

// Handle contact form submissions
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: emailUser, // Your email address
    subject: `E3SS Inquiry from ${name}`,
    text: `From: ${email}\n\nMessage:\n${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent:', info.response);
      res.status(200).json({ message: 'Email sent' });    
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
