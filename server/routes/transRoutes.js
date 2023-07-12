const express = require('express');
const transController = require('../controllers/transController');
const multer = require('multer');
const router = express.Router();


// Configure multer for file upload
const upload = multer({
    storage: multer.diskStorage({
        destination: 'uploads/', // Directory where uploaded files will be stored
        filename: (req, file, cb) => {
            const fileName = `${Date.now()}-${file.originalname}`;
            cb(null, fileName);
        },
    }),
});

router.post('/addTransaction', transController.addTransaction);
router.post('/getTransactions', transController.getTransactions);
router.post('/updateAccepted', transController.updateAccepted);
router.get('/getBloodBanks', transController.getBloodBanks);
router.post('/getStock', transController.getStock);
router.post('/getSingleStock', transController.getSingleStock);
router.post('/uploadFile', upload.single('file'), (req, res) => {
    const clientId = '1bhxsakl36gc0f8og7260oan5571uffw';
    const clientSecret = 'wcmDiRE8ywzXW1ZbizjueQfG1TvPN5oh';
    const accessToken = '41WjsAuVT7GKOicJwI4dU2nPCHjayveW';
    const uploadFolderId = '215905083396';

    transController.uploadFile(req, res, clientId, clientSecret, accessToken, uploadFolderId);
});


module.exports = router;
