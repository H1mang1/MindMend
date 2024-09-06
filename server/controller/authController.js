// import User from '../models/userModel';
const User = require('../models/userModel');
exports.signup = async (req, res) => {
  const { firstname, lastname, email, password, role } = req.body;
  try {
    const existingUser = await User.findOne({ $or: [{ email }, { username: email }] });
    if (existingUser) {
      return res.status(400).json({ error: 'Username or email already exists. Please log in.' });
    }

    const newUser = new User({ firstname, lastname, email, password, role });
    await newUser.save();
    res.status(201).send('User signed up successfully');
  } catch (error) {
    res.status(500).send('Error signing up user');
    console.log(error)
  }
};
exports.signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Find the user by email
    const user = await User.findOne({ email :email});
    if (!user) {
      return res.status(400).json({ error: 'User not found. Please sign up.' });
    }

    // Validate password
    const validPassword = await user.comparePassword(password);
    if (!validPassword) {
      return res.status(401).json({ error: 'Invalid password. Please try again.' });
    }
    // Successful login
    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    res.status(500).json({ error: 'Login failed' });
    console.log(error);
  }
};