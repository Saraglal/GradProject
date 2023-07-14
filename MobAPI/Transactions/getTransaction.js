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
    const getQuery = `
    SELECT
        bb_transactions.TransId,
        bb_branches.BranchName,
        DATE_FORMAT(bb_transactions.TransDate, '%d-%m-%Y') AS TransDate,
        bb_transactions.HumanName,
        bb_transactions.PhoneNumber,
        bb_transactions.TransTypeId,
        bb_transactions.Accepted,
        bb_transactions.HumanID,
        DATE_FORMAT(bb_transactions.BirthDate, '%d-%m-%Y') AS BirthDate,
        bb_transactions.UnitNumber,
        bb_transactions.BloodType,
        bb_transactions.Notes
    FROM
        bb_transactions
        INNER JOIN bb_branches ON bb_transactions.BranchNo = bb_branches.BranchNo
    WHERE
        bb_transactions.HumanID = ? AND bb_transactions.TransTypeId = ?
    ORDER BY
        bb_transactions.TransDate DESC`;

    const values = [HumanID, TransTypeId];
    connection.query(getQuery, values, (err, result) => {
        if (result) {
            const count = result.length;

            const title = `
            SELECT
                DATE_FORMAT(bb_humanos.LastDonation, '%d-%m-%Y') AS LastDonation
            FROM
                bb_humanos
            WHERE
                bb_humanos.HumanID = ?`;

            connection.query(title, [HumanID], (err, titleResult) => {
                const bloodType = result[0].BloodType !== undefined ? result[0].BloodType : undefined;
                const lastDonation = titleResult[0].LastDonation;

                res.status(200).json({
                    message: 'Requests are retrieved successfully',
                    count: count,
                    bloodType: bloodType,
                    lastDonation: lastDonation,
                    result: result
                });
            });
        } else {
            res.status(400).send({ message: 'There are no requests for this National ID' });
        }
    });

});

module.exports = router;