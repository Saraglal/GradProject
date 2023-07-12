// routes/predictionRoutes.js
const express = require('express');
const predictionController = require('../controllers/predictionController');

const router = express.Router();

router.post('/getPrediction', (req, res) => {
    const {BranchNo} = req.body;
    predictionController.getPrediction(req, res, BranchNo);
});

module.exports = router;
