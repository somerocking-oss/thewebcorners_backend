const express = require("express");

const auth = require("../../core/middleware/auth");
const asyncHandler = require("../../core/utils/asyncHandler");
const response = require("../../core/utils/response");
const { NotFoundError } = require("../../core/errors/ApiError");
const BlogPost = require("../../database/models/BlogPost");

const publicRouter = express.Router();

publicRouter.get(
  "/",
  asyncHandler(async (req, res) => {
    const posts = await BlogPost.find({ status: "published" }).sort({ publishedAt: -1 }).lean();
    return response(res, 200, "Blog posts fetched", posts);
  }),
);

publicRouter.get(
  "/:slug",
  asyncHandler(async (req, res) => {
    const post = await BlogPost.findOne({ slug: req.params.slug, status: "published" }).lean();
    if (!post) throw new NotFoundError("Blog post not found");
    return response(res, 200, "Blog post fetched", post);
  }),
);

const adminRouter = express.Router();
adminRouter.use(auth);

adminRouter.get(
  "/",
  asyncHandler(async (req, res) => {
    const posts = await BlogPost.find().sort({ createdAt: -1 }).lean();
    return response(res, 200, "Blog posts fetched", posts);
  }),
);

adminRouter.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const post = await BlogPost.findById(req.params.id).lean();
    if (!post) throw new NotFoundError("Blog post not found");
    return response(res, 200, "Blog post fetched", post);
  }),
);

adminRouter.post(
  "/",
  asyncHandler(async (req, res) => {
    const body = { ...req.body };
    if (body.status === "published" && !body.publishedAt) body.publishedAt = new Date();
    const post = await BlogPost.create(body);
    return response(res, 201, "Blog post created", post);
  }),
);

adminRouter.put(
  "/:id",
  asyncHandler(async (req, res) => {
    const body = { ...req.body };
    if (body.status === "published" && !body.publishedAt) body.publishedAt = new Date();
    const post = await BlogPost.findByIdAndUpdate(req.params.id, body, {
      returnDocument: "after",
      runValidators: true,
    });
    if (!post) throw new NotFoundError("Blog post not found");
    return response(res, 200, "Blog post updated", post);
  }),
);

adminRouter.delete(
  "/:id",
  asyncHandler(async (req, res) => {
    const post = await BlogPost.findByIdAndDelete(req.params.id);
    if (!post) throw new NotFoundError("Blog post not found");
    return response(res, 200, "Blog post deleted", null);
  }),
);

module.exports = { publicRouter, adminRouter };
