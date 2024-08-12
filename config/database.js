// const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost:27017");

// const db = mongoose.connection;

// db.on("error", console.error.bind(console, "Error in connecting with mongoDB"));

// db.once("open", () => {
//   console.log("Successfully Connected with mongoDB");
// });

// module.exports = db;

// for atlas

const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://sahiraman7:msUVnekqI4wTLyQ2@cluster0.lothw.mongodb.net/HospitalAPI?retryWrites=true&w=majority";

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Successfully Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error in connecting to MongoDB:", err.message);
  });

const db = mongoose.connection;

module.exports = db;
