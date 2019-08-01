const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema

const MakeAppointSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  address: {
    type: String
  },
  city: {
    type: String
  },
  city_state: {
    type: String
  },
  zip: {
    type: String
  },
  dataAndTime_OP01: {
    type: String,
    required: true
  },
  dataAndTime_OP02: {
    type: String
  },
  dataAndTime_OP03: {
    type: String
  },
  constraints: {
    type: String
  },
  work: {
    type: String,
    required: true
  },
  rwgister_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = MakeAppoint = mongoose.model("makeAppoint", MakeAppointSchema);
