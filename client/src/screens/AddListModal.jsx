import { useState } from "react";
import Modal from "../components/Modal";
import TextInput from "../components/TextInput";
import Button from "../components/Button";

const AddListModalBody = () => {
  const [listName, setListName] = useState("");
  const isSubmitDisable = listName.trim() === "";

  const addListhandler = () => {};

  return (
    <div className="w-[25rem] flex gap-4 items-center">
      <TextInput
        placeholder="Enter new list name"
        value={listName}
        onChange={(value) => setListName(value)}
      />

      <Button
        disabled={isSubmitDisable}
        title="Submit"
        loading={true}
        onClick={addListhandler}
      />
    </div>
  );
};

const AddListModal = ({ visible, onClose }) => {
  return (
    <Modal onClose={onClose} visible={visible} title="Add new todo list">
      <AddListModalBody />
    </Modal>
  );
};
export default AddListModal;
