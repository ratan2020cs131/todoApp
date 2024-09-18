import { create } from "zustand";

const useModal = create((set) => ({
  show: true,
  setVisibility: (value) => {
    set({ show: value });
  },
}));

export const useModalActions = () => useModal.getState().setVisibility;
export const modalVisibility = useModal.getState().show;
