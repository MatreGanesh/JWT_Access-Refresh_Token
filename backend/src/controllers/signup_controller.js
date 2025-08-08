const User = require('../models/user');
const bcrypt = require('bcrypt');

const createUser = async (req, res) => {

    console.log('Hiii')

    try {
        const { name, email, password } = req.body;
        console.log(req.body)

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const createdUser = new User({
            name, email, password: hashedPassword, // Store it as 'password', per your schemarole: 'customer'
        });

        // Save to DB
        const savedUser = await createdUser.save();

        // Return success response
        res.status(201).json({
            success: true, message: 'User created successfully!', data: savedUser
        });

    } catch (err) {
        console.error('Server Error:', err);
        res.status(500).json({
            success: false, message: 'Something went wrong. Please try again later.'
        });
    }
};

module.exports = { createUser };
