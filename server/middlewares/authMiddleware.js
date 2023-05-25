// middleware/authMiddleware.js
const jwtUtils = require('../utils/jwtUtils');

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    const decoded = jwtUtils.verifyToken(token);

    if (!decoded) {
        return res.status(401).json({ message: 'Invalid token' });
    }

    req.userId = decoded.userId;
    next();
};

module.exports = authMiddleware;
