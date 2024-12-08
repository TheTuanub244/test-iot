const mongoose = require('mongoose')
const { MongoClient } = require('mongodb');

const connectDB = async () => {
    const client = new MongoClient(mongoUri, {
        serverSelectionTimeoutMS: 50000 
    });
    const connected = await client.connect()
    .then(() => {
        console.log("connected successfully")
    })
}

module.exports = connectDB