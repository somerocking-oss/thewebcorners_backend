require("dotenv").config();

function parseOrigins(value, fallback) {
  if (!value) return fallback;
  return value.split(",").map((origin) => origin.trim());
}

module.exports = {
  NODE_ENV: process.env.NODE_ENV || "development",
  PORT: process.env.PORT || 5004,
  APP_NAME: process.env.APP_NAME || "Webcorners",
  APP_URL: process.env.APP_URL || `http://localhost:${process.env.PORT || 5004}`,

  MONGO_URI: process.env.MONGO_URI,

  JWT_SECRET: process.env.JWT_SECRET || "dev-secret-change-me",
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || "7d",

  CORS_ORIGINS: parseOrigins(process.env.CORS_ORIGINS, [
    "http://localhost:3000",
    "http://localhost:5174",
  ]),

  ADMIN_SEED_EMAIL: process.env.ADMIN_SEED_EMAIL,
  ADMIN_SEED_PASSWORD: process.env.ADMIN_SEED_PASSWORD,
  ADMIN_SEED_NAME: process.env.ADMIN_SEED_NAME || "Webcorners Admin",
};
