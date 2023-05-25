// services/authService.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const authService = {
    login: async (username, password) => {
        // Find the user by username
        const user = await User.findOne({ where: { UserName: username } });

        if (!user) {
            return null;
        }

        // Compare the provided password with the stored hashed password
        const isPasswordValid = await bcrypt.compare(password, user.PWD);

        if (!isPasswordValid) {
            return null;
        }

        // Generate and return a JWT token
        const token = jwt.sign({ userId: user.UserID }, 'your-secret-key', { expiresIn: '1h' });
        return token;
    },
};

module.exports = authService;
