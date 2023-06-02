const express = require('express');
const cors = require('cors');
const app = express();
const authRoutes = require('./routes/authRoutes');

// Enable CORS
app.use(cors());

app.use(express.json());

app.use('/auth', authRoutes);

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});


