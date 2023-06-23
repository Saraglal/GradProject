const express = require('express');
const router = express.Router();
const mysql = require('mysql2');

// Create a MySQL connection
const connection = mysql.createConnection({
    host: 'bloodbanksystem.mysql.database.azure.com',
    user: 'root1',
    port: '3306',
    password: '123456789Me',
    database: 'bloodbanksystem'
});

router.post('/', (req, res) => {
    const { HumanID, TransTypeId } = req.query;

    const getQuery = `SELECT * FROM bb_transactions WHERE HumanID = ? AND TransTypeId = ?`;
    const values = [HumanID, TransTypeId];
    connection.query(getQuery, values, (err, result) => {
        if (result) {
            res.status(200).json({
                message: 'Requests are retrieved successfully',
                result: result
            });
        } else {
            res.status(400).send({message: 'There is no requests for this National ID'});
        }
    });

});

module.exports = router;