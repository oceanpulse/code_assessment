import nodemailer from 'nodemailer';

// Nodemailer Transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export default async function handler(req, res) {
  // Handle CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*'); // Or specify your frontend domain
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  // Add logging to debug
  console.log('Received request:', { name, email, message });
  console.log('Environment variables:', { 
    hasUser: !!process.env.EMAIL_USER, 
    hasPass: !!process.env.EMAIL_PASS 
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Contact Request from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    return res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Detailed email error:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Email failed to send.', 
      error: error.message 
    });
  }
}