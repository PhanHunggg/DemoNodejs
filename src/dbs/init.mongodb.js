const mongoose = require("mongoose");

const connectString = process.env.DATABASE_URL;

mongoose
  .connect(connectString)
  .then(() => {
    console.log("Connected Mongodb");
  })
  .catch((err) => {
    console.log(err);
  });
