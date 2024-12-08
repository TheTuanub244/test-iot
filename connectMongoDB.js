const mongoose = require('mongoose')
const { MongoClient } = require('mongodb');
const mongoUri = process.env.MONGO_URI || "mongodb+srv://vercel-admin-user:fUMbRXDPALiyi43s@cluster0.jin5c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const connectDB = async () => {
    const client = new MongoClient(mongoUri, {
        serverSelectionTimeoutMS: 5000 
    });
    const connected = await client.connect()
    .then(() => {
        console.log("connected successfully")
    })
}

module.exports = connectDB