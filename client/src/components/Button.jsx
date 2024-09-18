import { Button as PrimeButton } from "primereact/button";

const variantClasses = {
  default: "bg-primary-blue hover:bg-primary-navy",
  disabled: "bg-primary-gray hover:bg-primary-gray !cursor-default",
};

const Button = ({
  title = "Submit",
  onClick,
  loading,
  variant = "default",
  disabled,
  Icon,
}) => {
  return (
    <PrimeButton
      icon={Icon}
      className={`${variantClasses[disabled ? "disabled" : variant]}`}
      label={title}
      onClick={() => {
        if (!disabled) onClick();
      }}
      loading={loading}
    />
  );
};
export default Button;
