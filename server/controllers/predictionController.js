const sequelize = require('../config/database');
const { spawn } = require('child_process');

const getDonationData = async (BranchNo) => {
    try {
        const query = `CALL GetDonationDetails(:BranchNo)`;

        const results = await sequelize.query(query, {
            replacements: { BranchNo },
        });
        return results;
    } catch (error) {
        console.error('Error retrieving donation details:', error);
        throw error;
    }
};
const getHumanData = async (BranchNo) => {
    try {
        const query = `CALL GetHumanDetails(:BranchNo)`;

        const results = await sequelize.query(query, {
            replacements: { BranchNo },
        });
        return results;
    } catch (error) {
        console.error('Error retrieving donation details:', error);
        throw error;
    }
};

const getPrediction = (req, res, BranchNo) => {
    try {
        getDonationData(BranchNo)
            .then((data) => {
                // Transform the data array
                const transformedData = data.map(({ TotalTransactions, TotalAmount, MonthsSinceFirstDonation, MonthsSinceLastDonation }) => {
                    return [TotalTransactions, TotalAmount, MonthsSinceFirstDonation, MonthsSinceLastDonation];
                });

                // Spawn a child process to execute the Python script
                const pythonScript = spawn('python', ['-u', 'C:/Users/zezoo/Downloads/Donatin Predection/model.py']);
                console.log('Node.js is running correctly.');

                // Send the transformed data to the Python script as a JSON string
                const transformedDataString = JSON.stringify(transformedData);
                console.log("Data to be sent:", transformedDataString);
                pythonScript.stdin.write(transformedDataString);
                pythonScript.stdin.end();

                // Collect the output from the Python script
                let result = '';
                let error = '';

                pythonScript.stdout.on('data', (data) => {
                    result += data.toString();
                });

                pythonScript.stderr.on('data', (data) => {
                    error += data.toString();
                });

                // Handle the completion of the Python script
                pythonScript.on('close', (code) => {
                    if (parseInt(code) === 0) {
                        if (error) {
                            console.error('Error executing Python script:4', error);
                            res.status(500).json({ error: 'Internal Server Error' });
                        } else {
                            const predictionArray = JSON.parse(result.trim());

                            // Get human data
                            getHumanData(BranchNo)
                                .then((humanData) => {
                                    const predictionDetails = humanData.map((obj, index) => {
                                        return { ...obj, prediction: predictionArray[index] };
                                    });
                                    res.status(200).json(predictionDetails);
                                })
                                .catch((error) => {
                                    console.error('Error retrieving human details:', error);
                                    res.status(500).json({ error: 'Internal Server Error' });
                                });
                        }
                    } else {
                        console.error('Error executing Python script');
                        res.status(500).json({ error: 'Internal Server Error' });
                    }
                });

            })
            .catch((error) => {
                console.error('Error retrieving donation details:', error);
                res.status(500).json({ error: 'Internal Server Error3' });
            });
    } catch (error) {
        console.error('Error retrieving donation details:', error);
        res.status(500).json({ error: 'Internal Server Error4' });
    }
};

module.exports = {
    getPrediction,
};
