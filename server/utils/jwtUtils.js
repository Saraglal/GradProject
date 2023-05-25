// utils/jwtUtils.js
const jwt = require('jsonwebtoken');

const jwtUtils = {
    verifyToken: (token) => {
        try {
            const decoded = jwt.verify(token, 'your-secret-key');
            return decoded;
        } catch (error) {
            return null;
        }
    },
};

module.exports = jwtUtils;
