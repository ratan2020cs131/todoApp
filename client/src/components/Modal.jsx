import { Dialog } from "primereact/dialog";
import { useModalActions, useModalVisibility } from "../store/useModal";
import { TypoRegular } from "./Typography";

const Modal = ({ title = "Modal title", children }) => {
  const isVisible = useModalVisibility();
  const setVisible = useModalActions();

  console.log(isVisible);

  return (
    <Dialog
      draggable={false}
      header={<TypoRegular>{title}</TypoRegular>}
      visible={isVisible}
      onHide={() => {
        if (!isVisible) return;
        setVisible(false);
      }}
    >
      {children}
    </Dialog>
  );
};
export default Modal;
