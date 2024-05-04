const mongoose = require("mongoose");

const OrderDetailSchema = mongoose.Schema({
  orderId: { type: String, require: true },
  productId: { type: String, require: true },
  paymentId: { type: String, require: true },
  shipperId: { type: String, require: true },
  quantity: { type: String, require: true },
  price: { type: String, require: true },
});

const OrderDetailModel = mongoose.model("OrderDetail", OrderDetailSchema);

module.exports = OrderDetailModel;
