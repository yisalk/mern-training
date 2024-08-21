const mongoose = require("mongoose");

// const URI = "mongodb+srv://yisal-washroom-finder:F7mFdQnsBFtbxdkU@washroomfinder.ofindnm.mongodb.net/mern-training";

const URI = process.env.DATABASE_URI;

const connectDb = async () => {
  try {
    await mongoose.connect(URI);
    console.log("connection establised successfully");
  } catch (error) {
    console.log("database connection failed", error);
    process.exit(0);
  }
}

module.exports = connectDb;
