
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'bbdatabase-instance-1.ch1eb2qhd2ej.eu-north-1.rds.amazonaws.com',
    user: 'root',
    port: '3306',
    password: '123456789',
    database: 'BloodBankSystem'

});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database:', err);
    } else {
        console.log('Connected to MySQL database!');
    }
});

module.exports = connection;
