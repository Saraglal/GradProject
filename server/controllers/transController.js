
const transModel = require('../models/transModel');

// Create a new Transaction
const addTransaction = async (req, res) => {
    try {
        const {
            TransDate,
            RName,
            PhoneNumber,
            HumanName,
            mTransNo,
            TransTypeId,
            Accepted,
            HumanID,
            BranchNo,
            CampID,
            BirthDate,
            UnitNumber,
            BloodType,
            Notes,
        } = req.body;

        // Create a new Transaction record in the database
        const newTransaction = await transModel.create({
            TransDate,
            RName,
            PhoneNumber,
            HumanName,
            mTransNo,
            TransTypeId,
            Accepted,
            HumanID,
            BranchNo,
            CampID,
            BirthDate,
            UnitNumber,
            BloodType,
            Notes,
        });

        res.status(201).json({ message: 'Transaction created successfully', request: newTransaction });
    } catch (error) {
        console.error('Error creating Transaction:', error);
        res.status(500).json({ message: 'Error creating Transaction' });
    }
};

// Function to retrieve transactions by TransTypeId
const getTransactions = async (req, res) => {
    try {
        const { transTypeId } = req.body;
        const transactions = await transModel.findAll({
            where: {
                TransTypeId: transTypeId,
            },
        });
        res.status(200).json(transactions);
    } catch (error) {
        console.error('Error retrieving transactions:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

//Update the Accepted status
const updateAccepted = async (req, res) => {
        const { Accepted, HumanID } = req.body;
        // Update the Accepted field
        transModel.update({ Accepted: Accepted }, { where: { HumanID: HumanID } })
            .then((result) => {
                console.log(result); // Number of affected rows
            })
            .catch((error) => {
                console.error(error);
            });
};


module.exports = {
    addTransaction,
    getTransactions,
    updateAccepted
};
