import { Button as PrimeButton } from "primereact/button";

const baseClasses = "hover:bg-primary-navy";
const variantClasses = {
  default: "bg-primary-blue",
};

const Button = ({
  title = "Submit",
  onClick,
  loading,
  variant = "default",
}) => {
  return (
    <PrimeButton
      className={`${baseClasses} ${variantClasses[variant]}`}
      label={title}
      onClick={onClick}
      loading={loading}
    />
  );
};
export default Button;
