import { TypoRegular } from "./Typography";
import Checkbox from "./Checkbox";
import { useState } from "react";
import SelectDropdown from "./SelectDropdown";
import { TASK_STATUS } from "../constants/index.js";
import CheckIcon from "../assets/CheckIcon";
const baseClasses =
  "px-4 py-3 w-full rounded-md flex gap-4 items-center bg-primary-gray";

const taskStatusOption = Object.keys(TASK_STATUS);

const Task = ({ title, status }) => {
  const [checked, setChecked] = useState();

  return (
    <div className={baseClasses}>
      <span className="flex-1 flex items-center gap-4">
        <CheckIcon />
        <TypoRegular>{title}</TypoRegular>
      </span>
      <SelectDropdown options={taskStatusOption} />
    </div>
  );
};
export default Task;
