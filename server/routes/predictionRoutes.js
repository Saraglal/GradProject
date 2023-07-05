// routes/authRoutes.js
const express = require('express');
const predictionController = require('../controllers/predictionController');

const router = express.Router();

router.post('/prediction', predictionController);

module.exports = router;
