const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema(
  {
    label: { type: String, required: true },
    street: { type: String, default: "" },
    locality: { type: String, required: true },
    region: { type: String, required: true },
    country: { type: String, default: "India" },
  },
  { _id: false },
);

const siteSettingSchema = new mongoose.Schema({
  logoUrl: { type: String, default: "" },
  tagline: { type: String, default: "Building Digital Corners of Success" },
  description: { type: String, default: "" },
  email: { type: String, default: "" },
  phone: { type: String, default: "" },
  whatsapp: { type: String, default: "" },
  locations: { type: [locationSchema], default: [] },
  socialLinks: {
    linkedin: { type: String, default: "" },
    twitter: { type: String, default: "" },
    instagram: { type: String, default: "" },
    facebook: { type: String, default: "" },
  },
});

module.exports = mongoose.model("SiteSetting", siteSettingSchema);
