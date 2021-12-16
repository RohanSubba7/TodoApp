const express = require("express");
require("dotenv").config();
const db = require("./database/connection");
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");
const cors = require("cors");

const categoryRoute = require("./routes/categoryRoute");

const app = express();

//middleware
app.use(cors());
app.use(bodyParser.json({}));
app.use(expressValidator());

app.get("/hello", (req, res) => {
  res.send("welcome to express and nodemon");
});

//routes
app.use("/api", categoryRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
