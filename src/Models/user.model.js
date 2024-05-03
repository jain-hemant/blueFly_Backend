const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  first_name: { type: String, require: true },
  last_name: { type: String, require: true },
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
  created: { type: Date, default: Date.now() },
});

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
