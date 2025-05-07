const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  platforms: {
    google: { type: String },
    twitter: { type: String },
    reddit: { type: String },
  },
  savedContent: [
    {
      platform: String,
      contentId: String,
      title: String,
      url: String,
      savedAt: Date,
    },
  ],
});

module.exports = mongoose.model("User", userSchema);