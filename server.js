"use strict";
require("dotenv").config();
const app = require("./src/app");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(`Wsv eCommerce start with ${PORT}`);
});

// Đóng server khi nhấn Ctrl + C
process.on("SIGINT", async () => {
  console.log("Closing server...");

  await mongoose.connection.close(); // Đóng MongoDB
  console.log("MongoDB disconnected");

  server.close(() => {
    console.log("Exit Server Express");
    process.exit(0);
  });
});
