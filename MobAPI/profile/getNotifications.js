const express = require('express');
const router = express.Router();
const { createConnection } = require('mysql2/promise');

// Create a MySQL connection
const connectionConfig = {
    host: 'bloodbanksystem.mysql.database.azure.com',
    user: 'root1',
    port: '3306',
    password: '123456789Me',
    database: 'bloodbanksystem'
};

router.post('/', async (req, res) => {
    const { id } = req.query;

    try {
        const connection = await createConnection(connectionConfig);

        const loginQuery = `SELECT
                                bb_notifications.NotifyId,
                                bb_notifications.NotifyTitle,
                                bb_notifications.NotifyBody
                            FROM
                                bb_notifications
                            WHERE
                                bb_notifications.HumanID = ?`;

        const [rows] = await connection.execute(loginQuery, [id]);

        if (rows.length > 0) {
            res.status(200).json({
                message: 'User Notifications',
                user: rows
            });
        } else {
            console.log('Invalid ID');
            res.status(400).send({ message: 'Invalid ID' });
        }
    } catch (error) {
        console.error('Error executing database query:', error);
        res.status(500).send({ message: 'Internal Server Error' });
    }
});

module.exports = router;
