import jwt from 'jsonwebtoken';
import User from '../models/User.js';

// Helper to generate JWT token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET || 'secret', {
    expiresIn: '30d',
  });
};

// @desc    Register a new user
// @route   POST /api/auth/register
// @access  Public
export const registerUser = async (req, res) => {
  const { fullName, email, password } = req.body;

  if (!fullName || !email || !password) {
    return res.status(400).json({ message: 'Full name, email, and password are required.' });
  }

  try {
    const existingUser = await User.findOne({ email: email.toLowerCase() });

    if (existingUser) {
      return res.status(409).json({ message: 'An account with this email already exists.' });
    }

    const user = new User({
      id: `user-${Date.now()}`,
      fullName,
      email,
      password,
    });

    await user.save();

    return res.status(201).json({
      token: generateToken(user._id),
      user: {
        id: user.id,
        fullName: user.fullName,
        email: user.email,
      },
    });
  } catch (error) {
    return res.status(500).json({ message: 'Server error during registration.', error: error.message });
  }
};

// @desc    Auth user & get token
// @route   POST /api/auth/login
// @access  Public
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required.' });
  }

  try {
    const user = await User.findOne({ email: email.toLowerCase() });

    if (user && (await user.matchPassword(password))) {
      return res.json({
        token: generateToken(user._id),
        user: {
          id: user.id,
          fullName: user.fullName,
          email: user.email,
        },
      });
    } else {
      return res.status(401).json({ message: 'Invalid email or password.' });
    }
  } catch (error) {
    return res.status(500).json({ message: 'Server error during login.', error: error.message });
  }
};
