const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user.model'); 

const secretKey = process.env.JWT_SECRET_KEY;

const loginController = async (req, res) => {
  // Extracting user credentials from the request body
  const { email, password } = req.body;

  try {
    // Finding the user by email
    const user = await User.findOne({ email });

    // Checking if the user exists
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Verifying the password 
    const isPasswordValid = await bcrypt.compare(password, user.password_hash);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // If the user is authenticated, generate a JWT token
    const token = jwt.sign({ userId: user.id, email: user.email }, secretKey, {
      expiresIn: '1h',
    });

    // Sending the token in the response
    res.status(200).json({ token });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = loginController;
