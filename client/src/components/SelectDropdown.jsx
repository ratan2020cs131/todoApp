import { Dropdown } from "primereact/dropdown";

const SelectDropdown = ({
  placeholder = "Select",
  loading,
  value,
  onChange,
  options = [],
}) => {
  return (
    <Dropdown
      loading={loading}
      value={value}
      onChange={(e) => onChange(e.value)}
      options={options}
      optionLabel="label"
      placeholder={placeholder}
    />
  );
};
export default SelectDropdown;
