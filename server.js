const express = require("express");
const path = require("path");
var fs = require("fs");
require("dotenv").config();
var bodyParser = require("body-parser");
var cors = require("cors");
var compression = require("compression");
var https = require("https");

const app = express();
const certOptions = {
  key: fs.readFileSync(
    path.resolve("/Users/oscarguerrero/Documents/oscar/certificates/server.key")
  ),
  cert: fs.readFileSync(
    path.resolve("/Users/oscarguerrero/Documents/oscar/certificates/server.crt")
  )
};

// app.use(cors());
app.options("*", cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(compression());
app.use(express.static(path.join(__dirname, "dist/isra1"))); //since index.html in dist is static

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/isra1/index.html")); //send all requests to our page to dist
});

app.post("/email", (req, res) => {
  console.log(req.body);

  res.header("Content-Type", "application/json").send({ message: "received" });
});

const PORT = process.env.PORT || 4705;

app.listen(PORT, (req, res) => {
  console.log("Running on port " + PORT);
});

// be sudo to run this
// var server = https.createServer(certOptions, app).listen(443);
