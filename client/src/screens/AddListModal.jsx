import { useEffect, useRef, useState } from "react";
import Modal from "../components/Modal";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import { useCrteateList } from "../hooks/useTodo";
import { useListModalActions } from "../store/useModal";
const AddListModalBody = () => {
  const listInputRef = useRef();
  const setModal = useListModalActions();
  const { createNewList, isCreatingList, isSuccess } = useCrteateList();
  const [listName, setListName] = useState("");
  const isSubmitDisable = listName.trim() === "";

  useEffect(() => {
    if (listInputRef && listInputRef.current) {
      listInputRef?.current?.focus();
    }
  }, []);

  const addListhandler = async () => {
    await createNewList({ listName });
  };

  if (isSuccess) setModal(false);

  return (
    <div className="w-[25rem] flex gap-4 items-center">
      <TextInput
        inputRef={listInputRef}
        placeholder="Enter new list name"
        value={listName}
        onChange={(value) => setListName(value)}
      />

      <Button
        disabled={isSubmitDisable}
        title="Create"
        loading={isCreatingList}
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
