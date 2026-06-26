const express = require("express");
const fs = require("fs");
const morgan = require("morgan");
// const mongoose = require("mongoose");
const cors = require("cors"); // consume cors similar to middle ware
const path = require("path");
// server creation
const server = express();
const colors = require("colors");
require("dotenv").config(); // for env configuration
colors.enable();
// db connection
// main().catch((err) => console.log(err.message));
// async function main() {
//   await mongoose.connect("mongodb://127.0.0.1:27017/ecommerce");
//   console.log("database connected successfully...");
// }
// // db connection
// async function main() {
//   await mongoose.connect(process.env.DB_URL);
//   console.log("database connected successfully...");
// }
// main().catch((err) => console.log(err.message));

const connect = require("./db/connect");

// router
const productRouter = require("./routes/products");
// const userRouter = require("./routes/users");

// built-in middlewares:
server.use(
  cors({
    origin: "*",
  })
);
server.use(express.json()); // body_parser -> converts JSON data
server.use(morgan("dev")); // logs
server.use(express.static(path.resolve(__dirname, process.env.PUBLIC_DIR)));
// routes
server.use("/products", productRouter.router);
// server.use("/users", userRouter.router);
server.use("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "dist", "index.html"));
});

// port listeners
server.listen(process.env.PORT, () => {
  console.log("Server Up and Running on Port :", process.env.PORT);
  connect();
});
