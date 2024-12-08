const express = require("express");
const mongoose = require('mongoose')

const app = express();
const { MongoClient } = require('mongodb');
const connectDB = require("./connectMongoDB");

require("dotenv").config();

app.use(express.json());
const mongoUri = process.env.MONGO_URI || "mongodb+srv://tuanub244:AtOePUkyLEbKvv16@it4409.0ybva.mongodb.net/?retryWrites=true&w=majority&appName=it4409"


async function setupMqttAndMongo() {
    try {
    connectDB()
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}
setupMqttAndMongo().catch(console.error)

module.exports = async (req, res) => {
    setupMqttAndMongo()
    console.log("HTTP request received");
    res.status(200).send("MQTT and MongoDB setup are running successfully.");
};
