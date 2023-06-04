const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const mysql = require('mysql2');

// Create a MySQL connection
const connection = mysql.createConnection({
  host: 'fdb1029.awardspace.net',
  user: '4324570_bloodbanksystem',
  port: '3306',
  password: 'mKf}SOd93W#H/}5k',
  database: '4324570_bloodbanksystem'
});

// Endpoint for password reset
router.put('/', (req, res) => {
  const { email } = req.query;
  const { newPassword } = req.body;

  // Generate a salt value
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      console.error('Error generating salt:', err);
      res.status(500).send({ message: 'Internal Server Error1' });
      return;
    }

    // Hash the new password using the generated salt
    bcrypt.hash(newPassword, salt, (err, hashedPassword) => {
      if (err) {
        console.error('Error hashing password:', err);
        res.status(500).send({ message: 'Internal Server Error2', newPassword });
        return;
      }

      // Update the password in the database
      const updateQuery = 'UPDATE bb_humanos SET HumanPassword = ? WHERE BB_HumanEmail = ?';
      connection.query(updateQuery, [hashedPassword, email], (err, result) => {
        if (err) {
          console.error('Error updating password:', err);
          res.status(500).send({ message: 'Internal Server Error' });
          return;
        }

        if (result.affectedRows === 0) {
          // No user found with the provided email
          res.status(404).send({ message: 'User not found' });
        } else {
          // Password reset successful
          res.status(200).send({ message: 'Password reset successful' });
        }
      });
    });
  });
});


module.exports = router;
