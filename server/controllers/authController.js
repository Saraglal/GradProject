// controllers/authController.js
const authService = require('../services/authService');

const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        // Validate the username and password
        if (!username || !password) {
            return res.status(400).json({ message: 'Username and password are required' });
        }

        // Call the authentication service
        const token = await authService.login(username, password);

        if (!token) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        res.status(200).json({ token });
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = {
    login,
};
