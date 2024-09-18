import { create } from "zustand";

const useModal = create((set) => ({
  show: false,
  setVisibility: (value) => {
    set({ show: value });
  },
}));

export const useModalActions = () => useModal.getState().setVisibility;
export const useModalVisibility = () => useModal((state) => state.show);
