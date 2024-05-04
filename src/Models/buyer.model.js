const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema({
  name: { type: String, require: true },
  email: { type: String, require: true },
  address: { type: Object, require: true },
//   created: { type: Date, default: Date.now() },
});

const OrderModel = mongoose.model("Order", OrderSchema);

module.exports = OrderModel;
