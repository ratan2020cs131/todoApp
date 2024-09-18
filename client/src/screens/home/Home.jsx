import { useState } from "react";
import { TypoRegular } from "../../components/Typography";
import ListItem from "../../components/ListItem";
import PlusIcon from "../../assets/PlusIcon";
import AddListModal from "../AddListModal";
import {
  useListModalActions,
  useListModalVisibility,
} from "../../store/useModal";
import { useGetTodoLists } from "../../hooks/useTodo";
import Loader from "../../components/Loader";
const Home = () => {
  const { lists = [], isFetching } = useGetTodoLists();
  const showModal = useListModalVisibility();
  const setModal = useListModalActions();
  const [listId, setList] = useState("");

  console.log({ lists });

  return (
    <div className="h-full w-full flex gap-4">
      <Loader loading={isFetching} />
      <div className="w-[16rem] flex flex-col gap-2 items-center overflow-y-auto">
        <TypoRegular>Todo Lists</TypoRegular>
        <span
          className="w-full flex gap-2 cursor-pointer items-center"
          onClick={() => setModal(true)}
        >
          <PlusIcon height={1} width={1} />
          Add new list
        </span>
        {lists.map((item) => (
          <ListItem
            key={item._id}
            listId={item._id}
            title={item.listName}
            onClick={(id) => setList(id)}
          />
        ))}
      </div>
      <div className="h-full border-r"></div>
      <div className="flex-1 items-center flex flex-col">
        {!listId && (
          <TypoRegular>Select a Todo List to view all the tasks</TypoRegular>
        )}
      </div>
      <AddListModal visible={showModal} onClose={() => setModal(false)} />
    </div>
  );
};
export default Home;
