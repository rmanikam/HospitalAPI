const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017");

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error in connecting with mongoDB"));

db.once("open", () => {
  console.log("Successfully Connected with mongoDB");
});

module.exports = db;
