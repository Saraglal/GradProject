const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());

const users = [
    { id: 1, email: 'user1@example.com', password: '$2b$10$Rf6u/cOILF6mm24JKeC0XuCG.IvDCwt.E1LyqE4VtJ8/xlKUIy5L2' }, // password: "password1"
    { id: 2, email: 'user2@example.com', password: '$2b$10$pq5KfPY1D4PUCD/cjJH0ou1blDk6A6XnHvmMrzgI9iXwR8dmyZnXy' }, // password: "password2"
];

const JWT_SECRET = 'mysecretkey';

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    const user = users.find(u => u.email === email);
    if (!user) {
        return res.status(401).json({ error: 'Invalid email or password' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
        return res.status(401).json({ error: 'Invalid email or password' });
    }

    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });

    res.cookie('token', token, { httpOnly: true, secure: true });
    res
