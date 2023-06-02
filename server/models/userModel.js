const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('bb_users', {
    UserID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    UserName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    PWD: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    RoleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    Phone1: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    BranchNo: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
}, {
    timestamps: false, // Disable timestamps (createdAt and updatedAt)
});

module.exports = User;