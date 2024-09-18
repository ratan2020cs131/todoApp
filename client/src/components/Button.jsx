import { Button as PrimeButton } from "primereact/button";

const baseClasses = "hover:bg-primary-navy";
const variantClasses = {
  default: "bg-primary-blue",
  disabled: "bg-primary-gray hover:bg-primary-gray !cursor-default",
};

const Button = ({
  title = "Submit",
  onClick,
  loading,
  variant = "default",
  disabled,
}) => {
  return (
    <PrimeButton
      className={`${baseClasses} ${
        variantClasses[disabled ? "disabled" : variant]
      }`}
      label={title}
      onClick={!disabled && onClick}
      loading={loading}
    />
  );
};
export default Button;
