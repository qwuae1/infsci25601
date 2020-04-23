const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const deptSchema = new Schema(
  {
    // id: {
    //   type: Number,
    //   required: true
    // },
    code: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    grade: {
      type: Number,
      required: true
    },
    employees: {
      type: Array,
      required: true
    },
    employerid: {
      type: Number,
      required: true
    }
  });

module.exports = mongoose.model("dept", deptSchema);
