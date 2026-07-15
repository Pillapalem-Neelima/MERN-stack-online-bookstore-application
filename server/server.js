const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

// Add these three lines here
const adminRoutes = require("./routes/adminRoutes");
const sellerRoutes = require("./routes/sellerRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(cors({
  origin: "http://localhost:5176",
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());  
app.use("/uploads", express.static("uploads"));

// Add these three lines here
app.use("/", (req, res, next) => {
    console.log("Incoming Request:", req.method, req.url);
    next();
}, adminRoutes);
app.use("/", sellerRoutes);
app.use("/", userRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("✅ MongoDB Connected"))
.catch((err) => console.log(err));

// Test Route
app.get("/", (req, res) => {
    res.send("BookStore Backend is Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});