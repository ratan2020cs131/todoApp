import mongoose from "mongoose";

const taskModel = new mongoose.Schema({
  taskName: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["active", "done"],
    required: true,
    default: "active",
  },
});

const Task = mongo.model("task", taskModel);
export default Task;
