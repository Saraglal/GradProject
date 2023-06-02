// controllers/authController.js
const authService = require('../services/authService');
const User = require('../models/userModel');

const login = async (req, res) => {
    try {
        const { username, password } = req.body;

// Find the user in the database
        const user = await User.findOne({ where: { UserName: username } });

        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

// Compare the password with the password from the database
        if (password !== user.PWD) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

// Generate a token
        const token = authService.generateToken(user.UserID, user.UserName, user.RoleId);

// Send the token as a response to the client
        res.json({ token });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = {
    login,
};