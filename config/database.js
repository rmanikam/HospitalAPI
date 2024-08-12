const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://sahiraman7:Y8oBMVfbG6YlPUzj@cluster0.dncnotl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0y"
);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error in connecting with mongoDB"));

db.once("open", () => {
  console.log("Successfully Connected with mongoDB");
});

module.exports = db;
