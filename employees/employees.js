const mongoose = require("mongoose");
// const timestamp = require('mongoose-timestamp-plugin');
const Schema = mongoose.Schema;

const employeeSchema = new Schema(
  {
    employeeID: {
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
    },

  });
//
// employeeSchema.plugin(timestamp,{
//     startDate: 'createdAt',
//     disableUpdated: true
// });

// Export model
module.exports = mongoose.model("employee", employeeSchema);
