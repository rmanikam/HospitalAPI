// for Compass

// require library
// const mongoose = require("mongoose");

// // connect to the DB
// mongoose.connect("mongodb://localhost/hospitalAPI");

// // check if DB is connected or Not
// const db = mongoose.connection;

// db.on(
//   "error",
//   console.error.bind(console, "Error in connecting to the DataBase")
// );

// db.once("open", function () {
//   console.log("DataBase connected Successfully");
// });

// module.exports = db;

// for atlas

const mongoose = require("mongoose");

// Replace with your actual MongoDB connection string
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
