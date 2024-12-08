const express = require("express");
const connectDB = require("./connectMongoDB");

const app = express();

require("dotenv").config();

app.use(express.json());

connectDB()

module.exports = async (req, res) => {
    console.log("HTTP request received");
    res.status(200).send("MQTT and MongoDB setup are running successfully.");
};
