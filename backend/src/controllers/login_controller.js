const bcrypt = require('bcrypt');
const User = require('../models/user');
const { generateToken } = require('../utils/jwtUtils')

const login = async (req, res) => {
    try {

        const { email, password } = req.body;
        console.log(email, password)

        const existingUser = await User.findOne({ email })
        if (!existingUser) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        const isPasswordValid = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordValid) {
            return res.status(401).json({ success: false, message: 'Invalid password' });
        }


        const token = await generateToken(existingUser);

        // Return success response
        res.status(201).json({
            success: true, message: 'User logged-In successfully!', token
        });

    } catch (err) {
        console.error('Login Error:', err.message);
        res.status(500).json({
            success: false, message: 'Something went wrong. Please try again later.'
        });
    }
}


module.exports = { login }