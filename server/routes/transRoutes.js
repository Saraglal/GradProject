const express = require('express');
const transController = require('../controllers/transController');

const router = express.Router();

router.post('/addTransaction', transController.addTransaction);
router.post('/getTransactions', transController.getTransactions);
router.post('/updateAccepted', transController.updateAccepted);
router.get('/getBloodBanks', transController.getBloodBanks);

module.exports = router;
