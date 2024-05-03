const express = require("express");
require("dotenv").config();
const connectToDb = require("./src/Config/db");

server.use(express.json());

const server = express();
const PORT = process.env.PORT || 9090;
server.listen(PORT, () => {
  connectToDb(process.env.DB_URL);
  console.log(`Server started at http://localhost:${PORT}`);
});
