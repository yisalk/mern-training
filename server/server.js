const express = require("express");
const app = express();
const dotenv = require('dotenv');
const authRoutes = require("./routes/auth-routes");
const connectDb = require("./utils/db");

const tets = "";

dotenv.config();
app.use(express.json());

app.use("/api/auth", authRoutes);

const port = 5000;
connectDb().then(() => {
  app.listen(port, () => console.log(`Server is listing on the port ${port}`));
})
