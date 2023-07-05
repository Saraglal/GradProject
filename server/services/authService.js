// services/authService.js
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/constants');

const generateToken = (userId, UserName, BranchNo, branchTypeName ) => {
    const payload = {
        userId,
        UserName,
        BranchNo,
        branchTypeName,
    };

    const options = {
        expiresIn: '1h', // Token expiration time
    };

    return jwt.sign(payload, JWT_SECRET, options);
};

module.exports = {
    generateToken,
};
