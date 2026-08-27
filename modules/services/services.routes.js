const express = require("express");

const auth = require("../../core/middleware/auth");
const asyncHandler = require("../../core/utils/asyncHandler");
const response = require("../../core/utils/response");
const { NotFoundError } = require("../../core/errors/ApiError");
const Service = require("../../database/models/Service");

const publicRouter = express.Router();

publicRouter.get(
  "/",
  asyncHandler(async (req, res) => {
    const services = await Service.find().sort({ order: 1, createdAt: 1 }).lean();
    return response(res, 200, "Services fetched", services);
  }),
);

publicRouter.get(
  "/slugs",
  asyncHandler(async (req, res) => {
    const services = await Service.find().select("slug").lean();
    return response(
      res,
      200,
      "Service slugs fetched",
      services.map((s) => s.slug),
    );
  }),
);

publicRouter.get(
  "/:slug",
  asyncHandler(async (req, res) => {
    const service = await Service.findOne({ slug: req.params.slug }).lean();
    if (!service) throw new NotFoundError("Service not found");
    return response(res, 200, "Service fetched", service);
  }),
);

const adminRouter = express.Router();
adminRouter.use(auth);

adminRouter.get(
  "/",
  asyncHandler(async (req, res) => {
    const services = await Service.find().sort({ order: 1, createdAt: 1 }).lean();
    return response(res, 200, "Services fetched", services);
  }),
);

adminRouter.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const service = await Service.findById(req.params.id).lean();
    if (!service) throw new NotFoundError("Service not found");
    return response(res, 200, "Service fetched", service);
  }),
);

adminRouter.post(
  "/",
  asyncHandler(async (req, res) => {
    const service = await Service.create(req.body);
    return response(res, 201, "Service created", service);
  }),
);

adminRouter.put(
  "/:id",
  asyncHandler(async (req, res) => {
    const service = await Service.findByIdAndUpdate(req.params.id, req.body, {
      returnDocument: "after",
      runValidators: true,
    });
    if (!service) throw new NotFoundError("Service not found");
    return response(res, 200, "Service updated", service);
  }),
);

adminRouter.delete(
  "/:id",
  asyncHandler(async (req, res) => {
    const service = await Service.findByIdAndDelete(req.params.id);
    if (!service) throw new NotFoundError("Service not found");
    return response(res, 200, "Service deleted", null);
  }),
);

module.exports = { publicRouter, adminRouter };
