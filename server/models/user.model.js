import mongoose from "mongoose";

const userModel = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  otp: String,
});

const User = mongoose.model("user", userModel);
export default User;
