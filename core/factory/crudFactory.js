const express = require("express");

const auth = require("../middleware/auth");
const asyncHandler = require("../utils/asyncHandler");
const response = require("../utils/response");
const { NotFoundError } = require("../errors/ApiError");

function createPublicRouter(Model, { sort = { order: 1, createdAt: 1 }, filter = {} } = {}) {
  const router = express.Router();

  router.get(
    "/",
    asyncHandler(async (req, res) => {
      const items = await Model.find(filter).sort(sort).lean();
      return response(res, 200, `${Model.modelName} list fetched`, items);
    }),
  );

  return router;
}

function createAdminRouter(Model, { sort = { order: 1, createdAt: 1 } } = {}) {
  const router = express.Router();
  router.use(auth);

  router.get(
    "/",
    asyncHandler(async (req, res) => {
      const items = await Model.find().sort(sort).lean();
      return response(res, 200, `${Model.modelName} list fetched`, items);
    }),
  );

  router.get(
    "/:id",
    asyncHandler(async (req, res) => {
      const item = await Model.findById(req.params.id).lean();
      if (!item) throw new NotFoundError(`${Model.modelName} not found`);
      return response(res, 200, `${Model.modelName} fetched`, item);
    }),
  );

  router.post(
    "/",
    asyncHandler(async (req, res) => {
      const item = await Model.create(req.body);
      return response(res, 201, `${Model.modelName} created`, item);
    }),
  );

  router.put(
    "/:id",
    asyncHandler(async (req, res) => {
      const item = await Model.findByIdAndUpdate(req.params.id, req.body, {
        returnDocument: "after",
        runValidators: true,
      });
      if (!item) throw new NotFoundError(`${Model.modelName} not found`);
      return response(res, 200, `${Model.modelName} updated`, item);
    }),
  );

  router.delete(
    "/:id",
    asyncHandler(async (req, res) => {
      const item = await Model.findByIdAndDelete(req.params.id);
      if (!item) throw new NotFoundError(`${Model.modelName} not found`);
      return response(res, 200, `${Model.modelName} deleted`, null);
    }),
  );

  return router;
}

module.exports = { createPublicRouter, createAdminRouter };
