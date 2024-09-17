import mongoose from "mongoose";

const userModel = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("user", userModel);
export default User;
