import { TypoRegular } from "./Typography";
import Checkbox from "./Checkbox";
import { useState } from "react";
const baseClasses =
  "px-4 py-3 bg-primary-white rounded-md flex gap-4 items-center";

const Task = () => {
  const [checked, setChecked] = useState();

  return (
    <div className={baseClasses}>
      <Checkbox isChecked={checked} onChange={(value) => setChecked(value)} />
      <TypoRegular>This is a random task</TypoRegular>
    </div>
  );
};
export default Task;
