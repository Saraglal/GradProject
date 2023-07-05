const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const transModel = sequelize.define('bb_transactions', {
    TransId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    TransDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    HumanName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    PhoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    RName: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    mTransNo: {
        type: DataTypes.STRING,
        allowNull: true,
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
    BirthDate: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    UnitNumber: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    BloodType: {
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

module.exports = transModel;