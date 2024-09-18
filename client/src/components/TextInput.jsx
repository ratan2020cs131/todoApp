import { InputText } from "primereact/inputtext";

const TextInput = ({maxLength, type = "text", placeholder, value, onChange }) => {
  return (
    <InputText
      maxLength={maxLength}
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
    />
  );
};
export default TextInput;
