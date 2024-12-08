const mongoose = require('mongoose')

const connectDB = async () => {
        await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log("Connected to MongoDB")
            const database1 = mongoose.connections.model;
            const database2 = mongoose.connections.Schema;

            console.log(database1)
            console.log(database2)
            console.log(mongoose.connection.db)
        })
}

module.exports = connectDB