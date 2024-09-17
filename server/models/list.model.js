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
});

const List = mongo.model("list", listModel);
export default List;
