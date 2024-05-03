const mongoose = require("mongoose");

const PaymentSchema = mongoose.Schema({
  category_id: { type: String, require: true },
  payment_date: { type: String, require: true },
  amount: { type: String, require: true },
  order_id: { type: String, require: true },
  supplier_id: { type: String, require: true },
  payment_method: { type: String, require: true, unique: true },
  payment_status: { type: Array, require: true, default: [] },
});

const paymentModel = mongoose.model("Payment", PaymentSchema);

module.exports = paymentModel;
