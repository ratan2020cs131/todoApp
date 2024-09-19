import { capitalize } from "../utils/string.util";
import { TypoRegular } from "./Typography";
import LoaderIcon from "../assets/LoaderIcon";
import DeleteIcon from "../assets/DeleteIcon";
import { useDeleteList } from "../hooks/useTodo";
import { useTaskModalActions } from "../store/useModal";

const ListItem = ({
  sr,
  listId,
  title = "List title #1",
  selected,
  onClick,
}) => {
  const { deleteList, isDeleting } = useDeleteList(listId);
  const { setListId } = useTaskModalActions();

  return (
    <div
      className="px-4 w-full flex items-center cursor-pointer bg-primary-gray py-1 rounded-lg border border-primary-navy"
      onClick={() => onClick(listId)}
    >
      <span className="flex-1 flex gap-2 items-center">
        {selected && (
          <span className={`w-3 h-3 rounded-full bg-primary-success`}></span>
        )}
        <TypoRegular>
          #{sr} {capitalize(title)}
        </TypoRegular>
      </span>
      <span
        onClick={(e) => {
          e.stopPropagation();
          deleteList();
          setListId("");
        }}
        className="cursor-pointer"
      >
        {isDeleting ? (
          <LoaderIcon width={1.5} height={1.5} />
        ) : (
          <DeleteIcon width={1} height={1} />
        )}
      </span>
    </div>
  );
};
export default ListItem;
