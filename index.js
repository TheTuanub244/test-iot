const express = require("express");

const app = express();

require("dotenv").config();

app.use(express.json());




module.exports = async (req, res) => {
    console.log("HTTP request received");
    res.status(200).send("MQTT and MongoDB setup are running successfully.");
};
