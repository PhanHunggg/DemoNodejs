"use strict";
require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const router = require("./routes");

const app = express();

// middleware
app.use(express.json());
app.use(express.static("."));
app.use(morgan("dev"));

//init dbs
require("./dbs/init.mongodb");
//init routes
app.use("/api", router)
// handling error

module.exports = app;
