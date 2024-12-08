const express = require("express");

const app = express();

require("dotenv").config();

app.use(express.json());



const PORT = 8000;
app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
