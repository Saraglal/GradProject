const sequelize = require('../config/database');
const { QueryTypes } = require('sequelize');
const branchModel = require('../models/branchModel');
const userModel = require('../models/userModel');

const addBranch = async (req, res) => {
    try {
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

        res.status(201).json({ message: 'Branch created successfully', request: newBranch, newUser });
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

        // MySQL query to retrieve blood-related information
        const query = `
      SELECT
        bb_branches.BranchName,
        COUNT(DISTINCT bb_transactions.BloodType) AS TotalBloodTypes,
        SUM(IF(trans_count > 5, 1, 0)) AS BloodTypesOverThreshold
      FROM
        bb_branches
        LEFT JOIN (
          SELECT
            bb_transactions.BranchNo,
            bb_transactions.BloodType,
            COUNT(bb_transactions.TransId) AS trans_count
          FROM
            bb_transactions
          WHERE
            bb_transactions.TransTypeId = 1
          GROUP BY
            bb_transactions.BranchNo,
            bb_transactions.BloodType
        ) AS bb_transactions ON bb_branches.BranchNo = bb_transactions.BranchNo
      GROUP BY
        bb_branches.BranchNo
    `;

        // Execute the MySQL query
        const bloodResults = await sequelize.query(query, { type: QueryTypes.SELECT });

        // Iterate over the branch results and merge the NeedsBlood value
        const branchesWithNeedsBlood = results.map((result) => {
            const { BranchName } = result;

            // Check if any blood type exceeds the threshold for the branch
            const branchBloodTypesOverThreshold = bloodResults.find(
                (bloodResult) => bloodResult.BranchName === BranchName && bloodResult.BloodTypesOverThreshold > 0
            );

            // Determine if the branch needs blood based on the blood types
            const needsBlood = branchBloodTypesOverThreshold ? 0 : 1;

            // Merge the NeedsBlood value into the branch object
            return {
                ...result.toJSON(),
                NeedsBlood: needsBlood,
            };
        });

        // Send the response with the merged data
        res.json(branchesWithNeedsBlood);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch branches' });
    }
};

module.exports = {
    addBranch,
    getBranches,
};
