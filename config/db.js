const mongoose = require("mongoose");
const env = require("./env");

async function connectDB() {
  mongoose.set("strictQuery", true);

  const conn = await mongoose.connect(env.MONGO_URI, {
    autoIndex: env.NODE_ENV === "development",
  });

  console.log(`MongoDB connected: ${conn.connection.host}/${conn.connection.name}`);

  mongoose.connection.on("disconnected", () => console.log("MongoDB disconnected"));
  mongoose.connection.on("reconnected", () => console.log("MongoDB reconnected"));
  mongoose.connection.on("error", (err) => console.error("MongoDB error:", err.message));
}

module.exports = connectDB;
