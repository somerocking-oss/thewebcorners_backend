const express = require("express");

const auth = require("../../core/middleware/auth");
const asyncHandler = require("../../core/utils/asyncHandler");
const response = require("../../core/utils/response");
const { NotFoundError } = require("../../core/errors/ApiError");
const Location = require("../../database/models/Location");

const publicRouter = express.Router();

publicRouter.get(
  "/",
  asyncHandler(async (req, res) => {
    const locations = await Location.find().sort({ order: 1, createdAt: 1 }).lean();
    return response(res, 200, "Locations fetched", locations);
  }),
);

publicRouter.get(
  "/slugs",
  asyncHandler(async (req, res) => {
    const locations = await Location.find().select("slug").lean();
    return response(
      res,
      200,
      "Location slugs fetched",
      locations.map((l) => l.slug),
    );
  }),
);

publicRouter.get(
  "/:slug",
  asyncHandler(async (req, res) => {
    const location = await Location.findOne({ slug: req.params.slug }).lean();
    if (!location) throw new NotFoundError("Location not found");
    return response(res, 200, "Location fetched", location);
  }),
);

const adminRouter = express.Router();
adminRouter.use(auth);

adminRouter.get(
  "/",
  asyncHandler(async (req, res) => {
    const locations = await Location.find().sort({ order: 1, createdAt: 1 }).lean();
    return response(res, 200, "Locations fetched", locations);
  }),
);

adminRouter.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const location = await Location.findById(req.params.id).lean();
    if (!location) throw new NotFoundError("Location not found");
    return response(res, 200, "Location fetched", location);
  }),
);

adminRouter.post(
  "/",
  asyncHandler(async (req, res) => {
    const location = await Location.create(req.body);
    return response(res, 201, "Location created", location);
  }),
);

adminRouter.put(
  "/:id",
  asyncHandler(async (req, res) => {
    const location = await Location.findByIdAndUpdate(req.params.id, req.body, {
      returnDocument: "after",
      runValidators: true,
    });
    if (!location) throw new NotFoundError("Location not found");
    return response(res, 200, "Location updated", location);
  }),
);

adminRouter.delete(
  "/:id",
  asyncHandler(async (req, res) => {
    const location = await Location.findByIdAndDelete(req.params.id);
    if (!location) throw new NotFoundError("Location not found");
    return response(res, 200, "Location deleted", null);
  }),
);

module.exports = { publicRouter, adminRouter };
