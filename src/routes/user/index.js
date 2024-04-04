const express = require("express");
const UserController = require("../../controllers/user.controller");

const user = express.Router();

user.post("/create", UserController.signup);

module.exports = user;
