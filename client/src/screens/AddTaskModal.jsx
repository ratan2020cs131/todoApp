import { useState } from "react";
import Modal from "../components/Modal";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import { useCreateTask } from "../hooks/useTodo";
import { useTaskModalActions, useTaskModalState } from "../store/useModal";

const AddTaskModalBody = () => {
  const { setVisibility: setTaskModal } = useTaskModalActions();
  const { listId } = useTaskModalState();
  const { createNewTask, isCreatingTask, isSuccess } = useCreateTask(listId);
  const [taskName, setTaskName] = useState("");
  const isSubmitDisable = taskName.trim() === "";

  const addTaskhandler = async () => {
    console.log({ listId });
    await createNewTask({ listId, taskName });
  };
  if (isSuccess) {
    console.log("created");
    setTaskModal(false);
  }

  return (
    <div className="w-[25rem] flex gap-4 items-center">
      <TextInput
        placeholder="Enter new task"
        value={taskName}
        onChange={(value) => setTaskName(value)}
      />

      <Button
        disabled={isSubmitDisable}
        title="Create"
        loading={isCreatingTask}
        onClick={addTaskhandler}
      />
    </div>
  );
};

const AddTaskModal = ({ visible, onClose }) => {
  return (
    <Modal onClose={onClose} visible={visible} title="Add new task">
      <AddTaskModalBody />
    </Modal>
  );
};
export default AddTaskModal;
