const express = require('express');
const cors = require('cors');
const app = express();
const authRoutes = require('./routes/authRoutes');
const transRoutes = require('./routes/transRoutes');
const branchesRoutes = require('./routes/branchesRoutes');
const predictionRoutes = require('./routes/predictionRoutes');

// Enable CORS
app.use(cors());

app.use(express.json());

app.use('/auth', authRoutes);
app.use('/transaction', transRoutes);
app.use('/branches', branchesRoutes);
app.use('/prediction', predictionRoutes);



// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});


