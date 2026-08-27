const mongoose = require("mongoose");

const portfolioItemSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    industry: { type: String, required: true },
    tag: { type: String, required: true },
    imageUrl: { type: String, default: "" },
    order: { type: Number, default: 0 },
  },
  { timestamps: true },
);

module.exports = mongoose.model("PortfolioItem", portfolioItemSchema);
