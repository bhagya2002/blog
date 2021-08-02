// get connection to the mongoDB
const mongoose = require("mongoose");

// user schema for the DB
const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unque: true,
    },
    email: {
      type: String,
      required: true,
      unque: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePic: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

// exporting the schema to the DB w/ specifcs to each field
module.exports = mongoose.model("User", UserSchema);
