const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const moment = require("moment-timezone");

// schema
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  registrationDate: {
    type: Date,
    default: Date.now,
  },
});

userSchema.virtual("formattedRegistrationDate").get(function () {
  return moment(this.registrationDate)
    .tz("Asia/Kolkata")
    .format("DD-MM-YYYY hh:mm:ss A");
});

const User = mongoose.model("User", userSchema);

module.exports = User;
