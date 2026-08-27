const asyncHandler = require("../../core/utils/asyncHandler");
const response = require("../../core/utils/response");
const { BadRequestError } = require("../../core/errors/ApiError");
const authService = require("./auth.service");

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) throw new BadRequestError("Email and password are required");

  const result = await authService.login(email, password);
  return response(res, 200, "Login successful", result);
});

const me = asyncHandler(async (req, res) => {
  return response(res, 200, "Current admin", { admin: req.admin });
});

module.exports = { login, me };
