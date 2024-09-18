import { TypoRegular } from "./Typography";
import SelectDropdown from "./SelectDropdown";
import { TASK_STATUS } from "../constants/index.js";
import CheckIcon from "../assets/CheckIcon";
import PlayIcon from "../assets/PlayIcon.jsx";
import { useUpdateTask } from "../hooks/useTodo.js";
import { capitalize } from "../utils/string.util.js";
import PauseIcon from "../assets/PauseIcon.jsx";

const baseClasses = "px-4 py-3 w-full rounded-md flex gap-4 items-center";
const variant = {
  pending: "bg-primary-gray",
  active: "bg-secondary-active",
  done: "bg-secondary-done",
};

const taskStatusOption = Object.keys(TASK_STATUS).map((item) => ({
  label: capitalize(item),
  value: item,
}));

const IconResolver = ({ status }) => {
  console.log({ status });

  switch (status) {
    case TASK_STATUS.pending:
      return <PauseIcon />;
    case TASK_STATUS.active:
      return <PlayIcon />;
    case TASK_STATUS.done:
      return <CheckIcon />;
  }
};

const Task = ({ sr, listId, taskId, title, status }) => {
  const { updateTask, isUpdating } = useUpdateTask({
    listId,
    taskId,
  });

  return (
    <div className={`${baseClasses} ${variant[status]}`}>
      <span className="flex-1 flex items-center gap-4">
        <TypoRegular>{sr}.</TypoRegular>
        <IconResolver status={status} />
        <TypoRegular>{capitalize(title)}</TypoRegular>
      </span>
      <SelectDropdown
        onChange={(value) =>
          updateTask({
            status: value,
          })
        }
        loading={isUpdating}
        value={status}
        options={taskStatusOption}
      />
    </div>
  );
};
export default Task;
