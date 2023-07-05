const express = require('express');
const branchesController = require('../controllers/branchesController');

const router = express.Router();

router.post('/addBranch', branchesController.addBranch);
router.get('/getBranches', branchesController.getBranches);

module.exports = router;