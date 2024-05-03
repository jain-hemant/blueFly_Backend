const mongoose = require("mongoose");

const CategorySchema = mongoose.Schema({
  category: { type: String, require: true, unique: true }, // clothing shoes handbag etc
  sub_category: { type: String, require: true }, // in shoes - Boot flat sandle, inCloth - jean shorts
});

const CategoryModel = mongoose.model("Categories", CategorySchema);

module.exports = CategoryModel;
