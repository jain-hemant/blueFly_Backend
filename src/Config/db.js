const mongoose = require("mongoose");
const connectToDb = async (DB_URL) => {
  try {
    await mongoose.connect(DB_URL);
    console.log("Database Connected Successfully.");
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = connectToDb;
