const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
});

const Post = mongoose.model("post", UserSchema);
module.exports = Post;
