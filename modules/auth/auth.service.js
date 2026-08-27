const jwt = require("jsonwebtoken");

const env = require("../../config/env");
const Admin = require("../../database/models/Admin");
const { UnauthorizedError } = require("../../core/errors/ApiError");

function signToken(admin) {
  return jwt.sign({ id: admin._id }, env.JWT_SECRET, { expiresIn: env.JWT_EXPIRES_IN });
}

async function login(email, password) {
  const admin = await Admin.findOne({ email: email.toLowerCase().trim() });
  if (!admin) throw new UnauthorizedError("Invalid email or password");

  const valid = await admin.comparePassword(password);
  if (!valid) throw new UnauthorizedError("Invalid email or password");

  const token = signToken(admin);
  return {
    token,
    admin: { id: admin._id, name: admin.name, email: admin.email, role: admin.role },
  };
}

module.exports = { login };
