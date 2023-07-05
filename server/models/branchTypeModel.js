const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const BranchTypeModel = sequelize.define('bb_branchtypes', {
    BranchTypeId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    BranchTypename: {
        type: DataTypes.STRING,
        allowNull: true,
    },
}, {
    timestamps: false, // Disable timestamps (createdAt and updatedAt)
});

module.exports = BranchTypeModel;
