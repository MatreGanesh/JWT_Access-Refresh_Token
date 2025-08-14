const express = require('express');
const cors = require('cors');
const dbConnect = require('./configuration/dbConfig');
const authRoutes = require('./routes/auth_routes');
const userRoutes = require('./routes/user_routes');
const createAdminAccount = require('./scripts/admin')
const dotenv = require('dotenv').config();
const app = express();

// PORT and MongoDB connection
const PORT = process.env.PORT || 7003;
dbConnect();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//Calling admin account
createAdminAccount();

// Routes
app.use('/api/auth', authRoutes); // <-- mounts your /register route
app.use('/api/user', userRoutes); // <-- mounts your /user route

// Default route
app.use('/', (req, res) => {
    res.send(`Hello World`);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
