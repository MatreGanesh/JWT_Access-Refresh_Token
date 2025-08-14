const express = require('express');
const router = express.Router();
const { getUsers } = require('../controllers/user_controller');
const { authenticationToken } = require('../utils/authMiddleware')

router.get('/users', authenticationToken, getUsers);

module.exports = router;
