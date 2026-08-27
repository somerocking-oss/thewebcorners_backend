const env = require("./config/env");
const connectDB = require("./config/db");
const app = require("./app");

async function start() {
  await connectDB();

  const server = app.listen(env.PORT, () => {
    console.log(`Webcorners API listening on port ${env.PORT}`);
  });

  const shutdown = () => {
    console.log("Shutting down gracefully...");
    server.close(() => process.exit(0));
  };

  process.on("SIGINT", shutdown);
  process.on("SIGTERM", shutdown);
}

start().catch((err) => {
  console.error("Failed to start server:", err);
  process.exit(1);
});
