const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const BBHumanos = sequelize.define(
    'bb_humanos',
    {
        HumanID: {
            type: DataTypes.STRING(15),
            allowNull: false,
            primaryKey: true,
            defaultValue: '',
            collate: 'utf8mb4_general_ci',
        },
        HumanName: {
            type: DataTypes.STRING(50),
            allowNull: true,
            defaultValue: null,
            collate: 'utf8mb4_general_ci',
        },
        HumanPassword: {
            type: DataTypes.STRING(80),
            allowNull: true,
            defaultValue: null,
            collate: 'utf8mb4_general_ci',
        },
        BloodTypeId: {
            type: DataTypes.TINYINT,
            allowNull: true,
            defaultValue: null,
        },
        BB_HumanPhone: {
            type: DataTypes.STRING(15),
            allowNull: true,
            defaultValue: null,
            collate: 'utf8mb4_general_ci',
        },
        BB_HumanBDate: {
            type: DataTypes.STRING(12),
            allowNull: true,
            defaultValue: null,
            collate: 'utf8mb4_general_ci',
        },
        BB_HumanCity: {
            type: DataTypes.BIGINT,
            allowNull: true,
            defaultValue: null,
        },
        BB_HumanArea: {
            type: DataTypes.BIGINT,
            allowNull: true,
            defaultValue: null,
        },
        BB_HumanAddress: {
            type: DataTypes.STRING(50),
            allowNull: true,
            defaultValue: null,
            collate: 'utf8mb4_general_ci',
        },
        BB_HumanEmail: {
            type: DataTypes.STRING(50),
            allowNull: true,
            defaultValue: null,
            collate: 'utf8mb4_general_ci',
        },
        HumanGender: {
            type: DataTypes.TINYINT,
            allowNull: true,
            defaultValue: null,
        },
        FirstDonation: {
            type: DataTypes.DATEONLY,
            allowNull: true,
            defaultValue: null,
        },
        LastDonation: {
            type: DataTypes.DATEONLY,
            allowNull: true,
            defaultValue: null,
        },
    },
    {
        tableName: 'bb_humanos',
        timestamps: false,
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
    }
);

module.exports = BBHumanos;