const { ApiError } = require("../errors/ApiError");

function errorHandler(err, req, res, next) {
  if (err instanceof ApiError) {
    return res.status(err.status).json({ success: false, message: err.message, data: null });
  }

  if (err.name === "ValidationError") {
    return res.status(400).json({ success: false, message: err.message, data: null });
  }

  if (err.code === 11000) {
    const field = Object.keys(err.keyValue || {})[0] || "field";
    return res.status(409).json({ success: false, message: `${field} already exists`, data: null });
  }

  console.error(err);
  return res.status(500).json({ success: false, message: "Internal server error", data: null });
}

function notFound(req, res) {
  res.status(404).json({ success: false, message: "Route not found", data: null });
}

module.exports = { errorHandler, notFound };
