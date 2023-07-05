const sequelize = require('../config/database');
const { QueryTypes } = require('sequelize');
const branchModel = require('../models/branchModel');
const userModel = require('../models/userModel');

const addBranch = async (req, res) => {
    try{
        const {
            fullName,
            phoneNumber,
            branch,
            governorate,
            address,
            userName,
            password,
        } = req.body;

        // Create a new Branch record in the database
        const newBranch = await branchModel.create({
            BranchName: fullName,
            BB_Phone: phoneNumber,
            BranchTypeId: branch,
            BB_City: governorate,
            BB_Address: address,
        });

        const newUser = await userModel.create({
            UserName: userName,
            PWD: password,
        });

        res.status(201).json({ message: 'Branch created successfully', request: newBranch,newUser });
    } catch (error) {
        console.error('Error creating Branch:', error);
        res.status(500).json({ message: 'Error creating Branch' });
    }
};

const getBranches = async (req, res) => {
    try {
        const results = await branchModel.findAll({
            attributes: ['BranchName', 'BB_Phone', 'BB_Address'],
        });
        res.json(results);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch branches' });
    }
};
module.exports = {
    addBranch,
    getBranches
}