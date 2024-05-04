const express = require("express");
require("dotenv").config();
const connectToDb = require("./src/Config/db");
const userRoutes = require("./src/Routes/user.routes");

const server = express();
const PORT = process.env.PORT || 9090;

server.use(express.json());
server.use("/api/v1/user", userRoutes);

server.listen(PORT, () => {
  connectToDb(process.env.DB_URL);
  console.log(`Server started at http://localhost:${PORT}`);
});
