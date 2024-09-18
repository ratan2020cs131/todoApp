import { Dialog } from "primereact/dialog";
import { TypoRegular } from "./Typography";

const Modal = ({
  visible,
  onClose,
  unClosable,
  title = "Modal title",
  children,
}) => {
  return (
    <Dialog
      draggable={false}
      header={<TypoRegular>{title}</TypoRegular>}
      visible={visible}
      onHide={() => {
        if (!visible) return;
        if (!unClosable) onClose();
      }}
    >
      {children}
    </Dialog>
  );
};
export default Modal;
