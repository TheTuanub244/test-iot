const express = require("express");

const app = express();
const { MongoClient } = require('mongodb');
const connectDB = require("./connectMongoDB");

require("dotenv").config();

app.use(express.json());
const mongoUri = process.env.MONGO_URI || "mongodb+srv://vercel-admin-user:fUMbRXDPALiyi43s@cluster0.jin5c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const client = new MongoClient(mongoUri, {
    serverSelectionTimeoutMS: 50000 
});

async function setupMqttAndMongo() {
    try {
        
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}


module.exports = async (req, res) => {
    console.log("Attempting to connect to MongoDB...");
    connectDB()
    console.log("Connected to MongoDB");
    console.log("HTTP request received");
    res.status(200).send("MQTT and MongoDB setup are running successfully.");
};
