// config/database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('bloodbanksystem', 'root1', '123456789Me', {
    host: 'bloodbanksystem.mysql.database.azure.com',
    dialect: 'mysql',
    port:'3306',
});
console.log('Server is connected to database');
module.exports = sequelize;
