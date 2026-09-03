const mongoose = require("mongoose");

const sectionSchema = new mongoose.Schema(
  {
    heading: { type: String, required: true },
    body: { type: String, required: true },
  },
  { _id: false },
);

const faqSchema = new mongoose.Schema(
  {
    question: { type: String, required: true },
    answer: { type: String, required: true },
  },
  { _id: false },
);

const locationSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
    area: { type: String, required: true },
    region: {
      type: String,
      enum: ["ghaziabad", "india", "punjab", "country"],
      default: "ghaziabad",
    },
    pincode: { type: String, default: "" },
    order: { type: Number, default: 0 },
    seoTitle: { type: String, required: true },
    metaDescription: { type: String, required: true },
    h1: { type: String, required: true },
    intro: { type: String, required: true },
    sections: { type: [sectionSchema], default: [] },
    landmarks: { type: [String], default: [] },
    faqs: { type: [faqSchema], default: [] },
    ctaTitle: { type: String, default: "" },
    ctaDescription: { type: String, default: "" },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Location", locationSchema);
