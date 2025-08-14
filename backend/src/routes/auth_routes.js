const express = require('express');
const router = express.Router();
const { createUser } = require('../controllers/signup_controller');
const { login } = require('../controllers/login_controller');

router.post('/register', createUser);
router.post('/login', login);

module.exports = router;
