const express = require("express");

const router = require("./routes/index");

const bodyParser = require("body-parser");

const passport = require("passport");
const passportStrategy = require("./config/passport");
const db = require("./config/database");
const app = express();

app.use(express.json());

const port = 8000;

app.use(router);

app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running the server ${err}`);
  }
  console.log(`Server is running on port : ${port}`);
});
