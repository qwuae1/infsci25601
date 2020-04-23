const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employerSchema = new Schema(
  {
    id: {
      type: Number,
      required: true
    },
    FirstName: {
      type: String,
      required: true
    },
    LastName: {
      type: String,
      required: true
    },
    Email: {
      type: String,
      required: true
    }
  });

module.exports = mongoose.model("employer", employerSchema);
