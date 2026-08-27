const env = require("../../config/env");
const connectDB = require("../../config/db");
const Admin = require("../models/Admin");

async function seedAdmin() {
  await connectDB();

  const existing = await Admin.findOne({ email: env.ADMIN_SEED_EMAIL });
  if (existing) {
    console.log(`Admin already exists: ${existing.email}`);
    process.exit(0);
  }

  const passwordHash = await Admin.hashPassword(env.ADMIN_SEED_PASSWORD);
  const admin = await Admin.create({
    name: env.ADMIN_SEED_NAME,
    email: env.ADMIN_SEED_EMAIL,
    passwordHash,
  });

  console.log(`Admin created: ${admin.email}`);
  process.exit(0);
}

seedAdmin().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
