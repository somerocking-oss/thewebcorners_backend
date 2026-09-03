const mongoose = require("mongoose");

const sectionSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    body: { type: String, required: true },
  },
  { _id: false },
);

const pageContentSchema = new mongoose.Schema(
  {
    pageKey: { type: String, required: true, unique: true, lowercase: true, trim: true },
    name: { type: String, required: true },
    order: { type: Number, default: 0 },
    seoTitle: { type: String, required: true },
    metaDescription: { type: String, required: true },
    h1: { type: String, default: "" },
    heroDescription: { type: String, default: "" },
    introText: { type: String, default: "" },
    sections: { type: [sectionSchema], default: [] },
  },
  { timestamps: true },
);

module.exports = mongoose.model("PageContent", pageContentSchema);
