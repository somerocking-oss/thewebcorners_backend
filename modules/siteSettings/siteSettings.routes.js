const express = require("express");

const auth = require("../../core/middleware/auth");
const asyncHandler = require("../../core/utils/asyncHandler");
const response = require("../../core/utils/response");
const SiteSetting = require("../../database/models/SiteSetting");

async function getOrCreateSettings() {
  let settings = await SiteSetting.findOne();
  if (!settings) settings = await SiteSetting.create({});
  return settings;
}

const publicRouter = express.Router();
publicRouter.get(
  "/",
  asyncHandler(async (req, res) => {
    const settings = await getOrCreateSettings();
    return response(res, 200, "Site settings fetched", settings);
  }),
);

const adminRouter = express.Router();
adminRouter.use(auth);
adminRouter.get(
  "/",
  asyncHandler(async (req, res) => {
    const settings = await getOrCreateSettings();
    return response(res, 200, "Site settings fetched", settings);
  }),
);
adminRouter.put(
  "/",
  asyncHandler(async (req, res) => {
    const settings = await getOrCreateSettings();
    Object.assign(settings, req.body);
    await settings.save();
    return response(res, 200, "Site settings updated", settings);
  }),
);

module.exports = { publicRouter, adminRouter };
