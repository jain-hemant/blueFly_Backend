const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema({
  customerId: { type: String, require: true },
  orderIate: { type: String, require: true },
  shipIate: { type: String, require: true },
  status: { type: String, require: true },
  total: { type: String, require: true },
  created: { type: Date, default: Date.now() },
});

const OrderModel = mongoose.model("Order", OrderSchema);

module.exports = OrderModel;
