import { Dialog } from "primereact/dialog";
import { modalVisibility, useModalActions } from "../store/useModal";
import { TypoRegular } from "./Typography";

const Modal = ({ header }) => {
  const isVisible = modalVisibility;
  const setVisible = useModalActions();

  console.log(isVisible);

  return (
    <Dialog
      draggable={false}
      header={<TypoRegular>{header}</TypoRegular>}
      visible={isVisible}
      // style={{ width: "50vw" }}
      onHide={() => {
        if (!isVisible) return;
        setVisible(false);
      }}
    >
      <p className="m-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </Dialog>
  );
};
export default Modal;
