const jwt = require("jsonwebtoken");

const env = require("../../config/env");
const Admin = require("../../database/models/Admin");
const { UnauthorizedError } = require("../errors/ApiError");
const asyncHandler = require("../utils/asyncHandler");

const auth = asyncHandler(async (req, res, next) => {
  const header = req.headers.authorization || "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : null;

  if (!token) throw new UnauthorizedError("Authentication token missing");

  let decoded;
  try {
    decoded = jwt.verify(token, env.JWT_SECRET);
  } catch {
    throw new UnauthorizedError("Invalid or expired token");
  }

  const admin = await Admin.findById(decoded.id).select("-passwordHash");
  if (!admin) throw new UnauthorizedError("Admin not found");

  req.admin = admin;
  next();
});

module.exports = auth;
