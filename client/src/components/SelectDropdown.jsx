import { Dropdown } from "primereact/dropdown";

const SelectDropdown = ({ value, onChange, options = [] }) => {
  return (
    <Dropdown
      value={value}
      onChange={(e) => onChange(e.value)}
      options={options}
      optionLabel="name"
      placeholder="Status"
    />
  );
};
export default SelectDropdown;
