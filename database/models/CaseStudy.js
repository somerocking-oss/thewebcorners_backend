const mongoose = require("mongoose");

const caseStudySchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    client: { type: String, required: true },
    result: { type: String, required: true },
    summary: { type: String, required: true },
    imageUrl: { type: String, default: "" },
    order: { type: Number, default: 0 },
  },
  { timestamps: true },
);

module.exports = mongoose.model("CaseStudy", caseStudySchema);
