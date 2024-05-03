const mongoose = require("mongoose");

const OrderDetailSchema = mongoose.Schema({
  order_id: { type: String, require: true },
  product_id: { type: String, require: true },
  payment_id: { type: String, require: true },
  shipper_id: { type: String, require: true },
  quantity: { type: String, require: true },
  price: { type: String, require: true },
});

const OrderDetailModel = mongoose.model("OrderDetail", OrderDetailSchema);

module.exports = OrderDetailModel;
