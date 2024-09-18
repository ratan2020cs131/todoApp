import { Checkbox } from "primereact/checkbox";
import CheckIcon from "../assets/CheckIcon";
import { colors } from "../../tailwind.config";

const BasicDemo = ({ isChecked, onChange }) => {
  return (
    <Checkbox
      onChange={(e) => onChange(e.checked)}
      checked={isChecked}
      icon={<CheckIcon fill={colors.primary.success}/>}
    />
  );
};

export default BasicDemo;
