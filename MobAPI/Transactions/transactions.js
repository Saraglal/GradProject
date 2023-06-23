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

    const {
        TransDate,
        PhoneNumber,
        HumanName,
        TransTypeId,
        HumanID,
        CampID,
        BirthDate,
        UnitNumber,
        BloodType,
        Notes,
    } = req.query;

    const Accepted = 0;
    const BranchNo = 1;

    // Create a new Transaction record in the database
    const insertQuery = 'INSERT INTO bb_transactions (TransDate, HumanName, PhoneNumber, HumanID, Notes, BirthDate, UnitNumber, BloodType, Accepted, BranchNo, TransTypeId) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    const values =[TransDate, HumanName, PhoneNumber, HumanID, Notes, BirthDate, UnitNumber, BloodType, Accepted, BranchNo, TransTypeId];
    connection.query(insertQuery, values, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).json({ message: 'Error creating Transaction' });
        }
        res.status(201).json({ message: 'Transaction created successfully'});
    });
});

module.exports = router;
