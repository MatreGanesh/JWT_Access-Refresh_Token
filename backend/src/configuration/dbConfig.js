const mongoose = require('mongoose');

const connectDB = async () => {
    try {
       const DB_NAME = {
        dbName : 'JWT_Access_Refresh',
       }
    
       const connect = await mongoose.connect(process.env.MONGODB_CONNECTION_STRING, DB_NAME)
       console.log(`Database Connected : ${connect.connection.host}, ${connect.connection.name}`)

    } catch (error) {
        console.log('Database Connection Error :',error)
        process.exit(1);
    }
}

module.exports = connectDB;