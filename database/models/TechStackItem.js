const mongoose = require("mongoose");

const techStackItemSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    order: { type: Number, default: 0 },
  },
  { timestamps: true },
);

module.exports = mongoose.model("TechStackItem", techStackItemSchema);
