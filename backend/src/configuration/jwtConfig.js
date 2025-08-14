const crypto = require('crypto');

//Generate a reandom screate key

const secretkey = crypto.randomBytes(32).toString('hex');

module.exports = { secretkey: secretkey };
