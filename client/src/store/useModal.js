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
