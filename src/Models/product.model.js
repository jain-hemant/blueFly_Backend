const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  category_id: { type: String, require: true },
  sub_category_id: { type: String, require: true },
  product: { type: String, require: true },
  brand: { type: String, require: true },
  supplier_id: { type: String, require: true },
  price: { type: String, require: true, unique: true },
  color: { type: Array, require: true, default: [] },
  quantity: { type: Number, require: true, default: 1 },
  created: { type: Date, default: Date.now() },
});

const ProductModel = mongoose.model("Product", ProductSchema);

module.exports = ProductModel;
