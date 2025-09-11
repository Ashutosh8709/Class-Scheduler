const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRouter = require("./routes/authRouter");
const UserModel = require("./models/User");
const mockUsers = require("./init/data");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8080;

main().catch((err) => console.log(err));

async function main() {
  await mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("MongoDB connection error:", err.message));
}

const initDB = async () => {
  await UserModel.deleteMany({});
  await UserModel.insertMany(mockUsers);
  console.log("Database Initialized with Mock Data");
};

// initDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/auth", authRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
