const sequelize = require('../config/database');
const { QueryTypes } = require('sequelize');
const transModel = require('../models/transModel');
const BBHumanos = require('../models/humanos');
const branchModel = require('../models/branchModel');

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
        if (TransTypeId === 1) {
            // Check if a record exists in the BBHumanos model with the given HumanID
            const existingRecord = await BBHumanos.findOne({ where: { HumanID } });
            const today = new Date();
            const year = today.getFullYear();
            const month = String(today.getMonth() + 1).padStart(2, '0');
            const day = String(today.getDate()).padStart(2, '0');
            const TransDate = `${year}-${month}-${day}`;

            if (existingRecord) {
                // Check if FirstDonation is empty or null
                if (!existingRecord.FirstDonation) {
                    console.log(TransDate);
                    // Update the value of FirstDonation with TransDate
                    await BBHumanos.update({ FirstDonation: TransDate }, { where: { HumanID } });
                } else {
                    console.log(TransTypeId);
                    // Update the value of LastDonation with TransDate
                    await BBHumanos.update({ LastDonation: TransDate }, { where: { HumanID } });
                }
            }
        }

        res.status(201).json({ message: 'Transaction created successfully', request: newTransaction });
    } catch (error) {
        console.error('Error creating Transaction:', error);
        res.status(500).json({ message: 'Error creating Transaction' });
    }
};

// Function to retrieve transactions by TransTypeId
const getTransactions = async (req, res) => {
    try {
        const { TransTypeId , branchNo} = req.body;
        let results;
        if(branchNo==1){
            results = await transModel.findAll({
            where: {
                TransTypeId: TransTypeId,
            },
        });
        }else{
             results = await transModel.findAll({
                where: {
                    TransTypeId: TransTypeId,
                    branchNo: branchNo,
                },
        });
        }

        // Extract the BranchNo values from the results
        const branchNos = results.map(result => result.BranchNo);

        // Fetch the BranchName for each BranchNo
        const branchNames = await branchModel.findAll({
            attributes: ['BranchNo', 'BranchName'],
            where: {
                BranchNo: branchNos,
            },
        });

        // Create a map of BranchNo to BranchName for efficient lookup
        const branchMap = {};
        branchNames.forEach(branch => {
            branchMap[branch.BranchNo] = branch.BranchName;
        });

        let formattedResults = [];

        if (TransTypeId === 1) {
            const LastDonations = await BBHumanos.findAll({
                attributes: ['LastDonation', 'FirstDonation', 'HumanID'],
            });

            // Map the LastDonations to the formattedResults based on HumanID
            formattedResults = results.map(result => {
                const lastDonation = LastDonations.find(donation => donation.HumanID === result.HumanID);
                const donationDate = lastDonation ? lastDonation.LastDonation || lastDonation.FirstDonation : null;
                return {
                    TransId: result.TransId,
                    TransDate: result.TransDate,
                    HumanName: result.HumanName,
                    PhoneNumber: result.PhoneNumber,
                    RName: result.RName,
                    mTransNo: result.mTransNo,
                    TransTypeId: result.TransTypeId,
                    Accepted: result.Accepted,
                    HumanID: result.HumanID,
                    CampID: result.CampID,
                    BirthDate: result.BirthDate,
                    UnitNumber: result.UnitNumber,
                    BloodType: result.BloodType,
                    Notes: result.Notes,
                    BranchName: branchMap[result.BranchNo],
                    LastDonation: donationDate,
                };
            });
        } else {
            // Map the BranchName to the results based on BranchNo
            formattedResults = results.map(result => ({
                TransId: result.TransId,
                TransDate: result.TransDate,
                HumanName: result.HumanName,
                PhoneNumber: result.PhoneNumber,
                RName: result.RName,
                mTransNo: result.mTransNo,
                TransTypeId: result.TransTypeId,
                Accepted: result.Accepted,
                HumanID: result.HumanID,
                CampID: result.CampID,
                BirthDate: result.BirthDate,
                UnitNumber: result.UnitNumber,
                BloodType: result.BloodType,
                Notes: result.Notes,
                BranchName: branchMap[result.BranchNo],
            }));
        }

        res.status(200).json(formattedResults);
    } catch (error) {
        console.error('Error retrieving transactions:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


//Update the Accepted status
const updateAccepted = async (req, res) => {
    const { Accepted, TransId, BranchName } = req.body;
    console.log(BranchName);
    // Update the Accepted field
    transModel
        .update(
            { Accepted: Accepted, BranchNo: sequelize.literal(`(SELECT BranchNo FROM bb_branches WHERE BranchName = '${BranchName}')`) },
            { where: { TransId: TransId } }
        )
        .then((result) => {
            console.log(result); // Number of affected rows
        })
        .catch((error) => {
            console.error(error);
        });
};


//Get the Blood Banks associated with transactions
const getBloodBanks = async (req, res) => {
    const { TransTypeId } = req.query;
    sequelize.query(
        'SELECT DISTINCT bb_branches.BranchName ' +
        'FROM bb_transactions ' +
        'INNER JOIN bb_branches ON bb_transactions.BranchNo = bb_branches.BranchNo ' +
        'WHERE bb_transactions.TransTypeId = :TransTypeId',
        {
            type: QueryTypes.SELECT,
            replacements: { TransTypeId: TransTypeId },
        }
    )
        .then(results => {
            console.log(results);
            res.status(200).json({ results });
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        });
};


module.exports = {
    addTransaction,
    getTransactions,
    getBloodBanks,
    updateAccepted,
};
