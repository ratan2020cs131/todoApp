import mongoose from "mongoose";

const listModel = new mongoose.Schema({
  listName: {
    type: String,
    required: true,
  },
  createdBy: {
    type: mongoose.Types.ObjectId,
    ref: "user",
  },
});

const List = mongoose.model("list", listModel);
export default List;
