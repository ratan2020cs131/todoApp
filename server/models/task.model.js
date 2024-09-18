import mongoose from "mongoose";

const taskModel = new mongoose.Schema({
  taskName: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "active", "done"],
    required: true,
    default: "active",
  },
  listId: {
    type: mongoose.Types.ObjectId,
    ref: "list",
  },
});

const Task = mongoose.model("task", taskModel);
export default Task;
