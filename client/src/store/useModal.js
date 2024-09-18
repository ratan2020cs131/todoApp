import { create } from "zustand";

const useModal = create((set) => ({
  show: false,
  setVisibility: (value) => {
    set({ show: value });
  },
}));

export const useModalActions = () => useModal.getState().setVisibility;
export const useModalVisibility = () => useModal((state) => state.show);

const useListModal = create((set) => ({
  show: false,
  setVisibility: (value) => {
    set({ show: value });
  },
}));
export const useListModalActions = () => useListModal.getState().setVisibility;
export const useListModalVisibility = () => useListModal((state) => state.show);

const useTaskModal = create((set) => ({
  show: false,
  listId: "",
  setVisibility: (value) => {
    set({ show: value });
  },
  setListId: (value) => {
    set({ listId: value });
  },
}));

export const useTaskModalActions = () => {
  const state = useTaskModal();
  return {
    setVisibility: state.setVisibility,
    setListId: state.setListId,
  };
};

export const useTaskModalState = () => {
  const state = useTaskModal();
  return {
    show: state.show,
    listId: state.listId,
  };
};
