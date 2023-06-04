// config/database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('BloodBankSystem', 'root', '123456789', {
    host: 'http://bloodbank.mywire.org',
    dialect: 'mysql',
    port:'3306',
});

module.exports = sequelize;
