import { Dialog } from "primereact/dialog";
import { useModalActions, useModalVisibility } from "../store/useModal";
import { TypoRegular } from "./Typography";

const Modal = ({ unClosable, title = "Modal title", children }) => {
  const isVisible = useModalVisibility();
  const setVisible = useModalActions();

  return (
    <Dialog
      draggable={false}
      header={<TypoRegular>{title}</TypoRegular>}
      visible={isVisible}
      onHide={() => {
        if (!isVisible) return;
        if (!unClosable) setVisible(false);
      }}
    >
      {children}
    </Dialog>
  );
};
export default Modal;
