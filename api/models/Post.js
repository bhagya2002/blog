// get connection to the mongoDB
const mongoose = require("mongoose");

// Post schema for the DB
const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unque: true,
    },
    description: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: false,
    },
    username: {
      type: String,
      required: true,
    },
    categories: {
      type: Array,
      required: true,
    },
  },
  { timestamps: true }
);

// exporting the schema to the DB w/ specifcs to each field
module.exports = mongoose.model("Post", PostSchema);
