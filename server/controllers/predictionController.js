const authService = require('../services/authService');
const User = require('../models/userModel');
const humanos = require('../models/humanos')
const sequelize = require('../config/database');
const { QueryTypes } = require('sequelize');



const getData = async (req, res) => {
    try {
        // Find the user in the database
        const user = await User.findOne({ where: { UserName: username } });

        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Compare the password with the password from the database
        if (password !== user.PWD) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const branchNo = user.BranchNo;

        // Sequelize query
        sequelize.query(
            'SELECT bb_branchtypes.BranchTypename ' +
            'FROM bb_branches ' +
            'INNER JOIN bb_branchtypes ON bb_branches.BranchTypeId = bb_branchtypes.BranchTypeId ' +
            'WHERE bb_branches.BranchNo = :branchNo',
            {
                type: QueryTypes.SELECT,
                replacements: { branchNo: branchNo },
            }
        )
            .then(results => {
                console.log(results[0].BranchTypename);
                // Generate a token
                const token = authService.generateToken(
                    user.UserID,
                    user.UserName,
                    user.BranchNo,
                    results[0].BranchTypename,
                );
                res.json({ token });
            })
            .catch(error => {
                console.error(error);
            });



        // Send the token as a response to the client

    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = {
    getPrediction,
};
