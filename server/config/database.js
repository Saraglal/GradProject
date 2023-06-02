// config/database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('BloodBankSystem', 'root', '123456789', {
    host: 'localhost',
    dialect: 'mysql',
    port:'3307',
});

module.exports = sequelize;
