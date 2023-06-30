const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const {
        Q1,
        Q2,
        Q3,
        Q4,
        Q5,
        Q6,
        Q7
    } = req.query;

    // Define an array of questions and their corresponding responses
    const questions = [
        { question: Q1, response: 'Answered yes for Q1.' },
        { question: Q2, response: 'Answered yes for Q2.' },
        { question: Q3, response: 'Answered yes for Q3.' },
        { question: Q4, response: 'Answered yes for Q4.' },
        { question: Q5, response: 'Answered yes for Q5.' },
        { question: Q6, response: 'Answered yes for Q6.' },
        { question: Q7, response: 'Answered yes for Q7.' },
    ];

    // Find the first question with an answer of 'yes'
    const answeredQuestion = questions.find(q => q.question === 'yes');

    if (answeredQuestion) {
        res.status(200).json({ message: answeredQuestion.response });
    } else {
        res.status(200).json({ message: 'User is ready to donate.' });
    }
});

module.exports = router;
