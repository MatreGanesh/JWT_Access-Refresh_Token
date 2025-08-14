const User = require('../models/user');

const getUsers = async (req, res) => {
    try {

        const users = await User.find({});
        res.status(200).json({
            success: true, users
        });

    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false, message: err
        });
    }
}

module.exports = { getUsers };