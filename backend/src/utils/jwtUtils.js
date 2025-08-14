const jwt = require('jsonwebtoken');
const { secretkey } = require('../configuration/jwtConfig');
const user = require('../models/user');

const generateToken = async () => {

    const payload = {
        id: user.id,
        email: user.email,
        role: user.role
    }
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

}

module.exports = { generateToken };