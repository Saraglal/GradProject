const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const request = sequelize.define('bb_transactions', {
    TansId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
    },
    TransDate: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    mTransNo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    TransTypeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    Accepted: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    HumanID: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    BranchNo: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    CampID: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    UnitNumber: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    BloodTypeId: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    Notes: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
}, {
    timestamps: false, // Disable timestamps (createdAt and updatedAt)
});

module.exports = request;