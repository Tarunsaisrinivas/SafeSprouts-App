const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  password: String,
  name: String,
  email: String,
});

const User = mongoose.model("user", userSchema);

module.exports = { User: User };
