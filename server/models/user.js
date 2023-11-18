const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//schema
const userSchema = new Schema({
  fullName: {
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
  area: {
    type: String,
    enum: [
      "Asia",
      "Africa",
      "North America",
      "South America",
      "Antarctica",
      "Europe",
      "Australia",
    ],
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
