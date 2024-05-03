const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema({
  customer_id: { type: String, require: true },
  order_date: { type: String, require: true },
  ship_date: { type: String, require: true },
  status: { type: String, require: true },
  total: { type: String, require: true },
  created: { type: Date, default: Date.now() },
});

const OrderModel = mongoose.model("Order", OrderSchema);

module.exports = OrderModel;
