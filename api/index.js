const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");

// secret settings
dotenv.config();

// connect to database using json
app.use(express.json());

// connect to database using mongoose
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

// set up routes for auth
app.use("/api/auth", authRoute);

// set up routes for api (which it listens to)
app.listen("5000", () => {
  console.log("backend is running");
});
