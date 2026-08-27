const mongoose = require("mongoose");

const trustedLogoSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    logoUrl: { type: String, default: "" },
    order: { type: Number, default: 0 },
  },
  { timestamps: true },
);

module.exports = mongoose.model("TrustedLogo", trustedLogoSchema);
