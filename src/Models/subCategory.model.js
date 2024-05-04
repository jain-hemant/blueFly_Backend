const mongoose = require("mongoose");

const SubCategorySchema = mongoose.Schema({
  categoryId: { type: String, require: true }, // clothing shoes handbag etc
  subCategory: { type: String, require: true }, // in shoes - Boot flat sandle, inCloth - jean shorts
});

const SubCategoryModel = mongoose.model("SubCategories", SubCategorySchema);

module.exports = SubCategoryModel;
