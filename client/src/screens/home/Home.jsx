import { TypoRegular } from "../../components/Typography";
import ListItem from "../../components/ListItem";
import PlusIcon from "../../assets/PlusIcon";
import AddListModal from "../AddListModal";
import AddTaskModal from "../AddTaskModal";
import {
  useListModalActions,
  useListModalVisibility,
  useTaskModalActions,
  useTaskModalState,
} from "../../store/useModal";
import { useGetTodoLists, useGetTodoTasks } from "../../hooks/useTodo";
import Loader from "../../components/Loader";
import Task from "../../components/Task";

const Home = () => {
  const showListModal = useListModalVisibility();
  const setListModal = useListModalActions();
  const { show: showTaskModal, listId } = useTaskModalState();
  const { setVisibility: setTaskModal, setListId } = useTaskModalActions();

  const { lists = [], isFetching } = useGetTodoLists();
  const { tasks = [], isFetchingTasks } = useGetTodoTasks(listId);

  console.log({ tasks });

  return (
    <div className="h-full w-full flex gap-4">
      <Loader loading={isFetching || isFetchingTasks} />
      <div className="w-[16rem] flex flex-col gap-2 items-center overflow-y-auto">
        <TypoRegular>Todo Lists</TypoRegular>
        <span
          className="w-full flex gap-2 cursor-pointer items-center"
          onClick={() => setListModal(true)}
        >
          <PlusIcon height={1} width={1} />
          Add new list
        </span>
        {lists.map((item, index) => (
          <ListItem
            key={item._id}
            sr={index + 1}
            listId={item._id}
            title={item.listName}
            onClick={(id) => setListId(id)}
          />
        ))}
      </div>
      <div className="h-full border-r"></div>
      <div className="flex-1 items-center flex flex-col">
        {!listId ? (
          <TypoRegular>Select a Todo List to view all the tasks</TypoRegular>
        ) : (
          <div className=" flex w-full items-center flex-col gap-4 overflow-y-auto">
            <span
              className="w-full flex gap-2 cursor-pointer items-center"
              onClick={() => setTaskModal(true)}
            >
              <PlusIcon height={1} width={1} />
              Add new Task
            </span>
            {tasks.length > 0 && (
              <span className="w-full flex gap-2 cursor-pointer items-center">
                <TypoRegular>Total: {tasks.length}</TypoRegular>
              </span>
            )}
            {tasks.map((item, index) => (
              <Task
                key={item._id}
                sr={index + 1}
                taskId={item._id}
                listId={item.listId}
                title={item.taskName}
                status={item.status}
              />
            ))}
          </div>
        )}
      </div>
      {showListModal && (
        <AddListModal
          visible={showListModal}
          onClose={() => setListModal(false)}
        />
      )}
      {showTaskModal && (
        <AddTaskModal
          visible={showTaskModal}
          onClose={() => setTaskModal(false)}
        />
      )}
    </div>
  );
};
export default Home;
