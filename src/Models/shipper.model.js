const mongoose = require("mongoose");

const ShipperSchema = mongoose.Schema({
  name: { type: String, require: true },
  address: { type: String, require: true },
  phone: { type: String, require: true },
});

const ShipperModel = mongoose.model("Shipper", ShipperSchema);

module.exports = ShipperModel;
