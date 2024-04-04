"use strict";
const app = require("./src/app");
const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log("Wsv connect");
});

process.on("SIGINT", () => {
  console.log("server stop");
});
