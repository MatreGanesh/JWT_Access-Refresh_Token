const express = require('express');
const router = express.Router();
const { createUser } = require('../controllers/signup_controller');

router.post('/register', createUser);

module.exports = router;
