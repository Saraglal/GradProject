const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const BranchModel = sequelize.define('bb_branches', {
    BranchNo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    BranchName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    ContactName: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    BranchTypeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    BB_Phone: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    BB_City: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    BB_Area: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    BB_Address: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
}, {
    timestamps: false, // Disable timestamps (createdAt and updatedAt)
});

module.exports = BranchModel;
