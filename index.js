require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const mongoStr = process.env.DATABASE_URL || 5000;

mongoose.connect(mongoStr);
const database = mongoose.connection;

database.on("error", (error) => {
  console.error(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

const routers = require("./routers/routers.js");
const app = express();
app.use(express.json());

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use("/api", routers);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
