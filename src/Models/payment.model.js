const mongoose = require("mongoose");

const PaymentSchema = mongoose.Schema({
  categoryId: { type: String, require: true },
  paymentDate: { type: String, require: true },
  amount: { type: String, require: true },
  orderId: { type: String, require: true },
  supplierId: { type: String, require: true },
  paymentMethod: { type: String, require: true, unique: true },
  paymentStatus: { type: Array, require: true, default: [] },
});

const paymentModel = mongoose.model("Payment", PaymentSchema);

module.exports = paymentModel;
