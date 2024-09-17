import mongoose from "mongoose";

const listModel = new mongoose.Schema({
  listName: {
    type: String,
    required: true,
  },
  tasks: {
    type: mongoose.Types.ObjectId,
    ref: "task",
  },
  createdBy: {
    type: mongoose.Types.ObjectId,
    ref: "user",
  },
});

const List = mongoose.model("list", listModel);
export default List;
