// get connection to the mongoDB
const mongoose = require("mongoose");

// category schema for the DB
const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unque: true,
    },
  },
  { timestamps: true }
);

// exporting the schema to the DB w/ specifcs to each field
module.exports = mongoose.model("Category", CategorySchema);
