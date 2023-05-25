const express = require('express');
const app = express();
const authController = require('../../server/controllers/authController');
const authMiddleware = require('../../server/middlewares/authMiddleware');

app.use(express.json());

// Routes
app.use('/api/auth', authController);

// Protected routes
app.use('/api', authMiddleware);

// Handle protected routes
app.get('/api/protected', (req, res) => {
    res.json({ message: 'Protected route accessed successfully' });
});

// Start the server
app.listen(3001, () => {
    console.log('Server is running on port 3001');
});
