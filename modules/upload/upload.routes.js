const express = require("express");

const auth = require("../../core/middleware/auth");
const upload = require("../../core/middleware/upload");
const asyncHandler = require("../../core/utils/asyncHandler");
const response = require("../../core/utils/response");
const { BadRequestError } = require("../../core/errors/ApiError");
const env = require("../../config/env");

const router = express.Router();
router.use(auth);

router.post(
  "/",
  upload.single("file"),
  asyncHandler(async (req, res) => {
    if (!req.file) throw new BadRequestError("No file uploaded");
    const url = `${env.APP_URL}/uploads/${req.file.filename}`;
    return response(res, 201, "File uploaded", { url });
  }),
);

module.exports = router;
