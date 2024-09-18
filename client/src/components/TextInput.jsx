import { InputText } from "primereact/inputtext";

const TextInput = ({ type = "text", placeholder, value, onChange }) => {
  return (
    <InputText
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
    />
  );
};
export default TextInput;
