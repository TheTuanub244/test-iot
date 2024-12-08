const mongoose = require('mongoose')

const connectDB = async () => {
        await mongoose.connect(process.env.MONGODB_URI)
        .then(() => {
            console.log("Connected to MongoDB")
            const database1 = mongoose.connections.model;
            const database2 = mongoose.connections.Schema;

            console.log(database)
        })
}

module.exports = connectDB