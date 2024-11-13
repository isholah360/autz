const express = require("express")
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./router/authRoutes");
const productRoutes = require("./router/productRoutes");
const cookieParser = require("cookie-parser");
const next = require("next");
const path = require("path");

dotenv.config();
connectDB();

const app = express();

const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });

const handle = nextApp.getRequestHandler();
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);

app.all("*", (req, res) => {
  return handle(req, res);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  nextApp.prepare().then(() => {
    console.log(`Server running on port ${PORT}`);
  });
});
