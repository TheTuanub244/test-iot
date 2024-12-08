const mongoose = require('mongoose')

const connectDB = async () => {
        await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log("Connected to MongoDB")
            const database = mongoose.connection.db
            database.collection('bookings').find().toArray()
                .then(test => console.log(test))
        })
}

module.exports = connectDB