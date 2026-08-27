const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const compression = require("compression");

const env = require("./config/env");
const apiV1 = require("./api/v1");
const { errorHandler, notFound } = require("./core/middleware/errorHandler");

const app = express();

app.use(helmet());
app.use(
  cors({
    origin: env.CORS_ORIGINS,
    credentials: true,
  }),
);
app.use(compression());
app.use(express.json({ limit: "2mb" }));
app.use(express.urlencoded({ extended: true }));

if (env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/uploads", express.static("uploads"));
app.use("/api/v1", apiV1);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
