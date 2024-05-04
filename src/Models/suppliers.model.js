const mongoose = require("mongoose");

const SupplierSchema = mongoose.Schema({
  name: { type: String, require: true },
  address: { type: String, require: true },
  phone: { type: String, require: true },
});

const SupplierModel = mongoose.model("Supplier", SupplierSchema);

module.exports = SupplierModel;
