const mongoose = require("mongoose");

const SubCategorySchema = mongoose.Schema({
  category_id: { type: String, require: true }, // clothing shoes handbag etc
  sub_category: { type: String, require: true }, // in shoes - Boot flat sandle, inCloth - jean shorts
});

const SubCategoryModel = mongoose.model("SubCategories", SubCategorySchema);

module.exports = SubCategoryModel;
