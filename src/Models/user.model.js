const mongoose = require("mongoose");

const CustomerSchema = mongoose.Schema({
  firstName: { type: String, require: true },
  lastName: { type: String, require: true },
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
  created: { type: Date, default: Date.now() },
});

const CustomerModel = mongoose.model("Customer", CustomerSchema);

module.exports = CustomerModel;
