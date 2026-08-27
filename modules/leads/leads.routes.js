const express = require("express");

const auth = require("../../core/middleware/auth");
const asyncHandler = require("../../core/utils/asyncHandler");
const response = require("../../core/utils/response");
const { BadRequestError, NotFoundError } = require("../../core/errors/ApiError");
const Lead = require("../../database/models/Lead");

const publicRouter = express.Router();

publicRouter.post(
  "/",
  asyncHandler(async (req, res) => {
    const { name, email, phone, service, message, sourcePage } = req.body;
    if (!name || !email) throw new BadRequestError("Name and email are required");

    const lead = await Lead.create({ name, email, phone, service, message, sourcePage });
    return response(res, 201, "Thank you, we'll be in touch within one business day", lead);
  }),
);

const adminRouter = express.Router();
adminRouter.use(auth);

adminRouter.get(
  "/",
  asyncHandler(async (req, res) => {
    const { status } = req.query;
    const filter = status ? { status } : {};
    const leads = await Lead.find(filter).sort({ createdAt: -1 }).lean();
    return response(res, 200, "Leads fetched", leads);
  }),
);

adminRouter.patch(
  "/:id",
  asyncHandler(async (req, res) => {
    const { status } = req.body;
    const lead = await Lead.findByIdAndUpdate(req.params.id, { status }, { returnDocument: "after" });
    if (!lead) throw new NotFoundError("Lead not found");
    return response(res, 200, "Lead updated", lead);
  }),
);

adminRouter.delete(
  "/:id",
  asyncHandler(async (req, res) => {
    const lead = await Lead.findByIdAndDelete(req.params.id);
    if (!lead) throw new NotFoundError("Lead not found");
    return response(res, 200, "Lead deleted", null);
  }),
);

module.exports = { publicRouter, adminRouter };
