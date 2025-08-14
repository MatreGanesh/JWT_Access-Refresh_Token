const User = require('../models/user');
const bcrypt = require('bcrypt');

const createAdminAccount = async () => {
    try {
        const existsAdmin = await User.findOne({ email: 'admin@test.com' });
        if (!existsAdmin) {
            const newAdmin = new User({
                name: 'Admin',
                email: 'admin@test.com',
                password: await bcrypt.hash('admin', 10),
                role: 'admin'
            })

            await newAdmin.save();
            console.log('Admin account created successfully!')
        } else {
            console.log('Admin already exist!');
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = createAdminAccount;