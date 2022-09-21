const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config({ path: "./config/.env" });
require("./config/db");
const app = express();

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
