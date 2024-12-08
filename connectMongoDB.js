const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        .then(() => {
            console.log("Connected to MongoDB")
            const database = mongoose.connection.db;
            console.log(database)
        })
    } catch (error) {
        console.log("Connect failed " + error.message )
    }
}

module.exports = connectDB