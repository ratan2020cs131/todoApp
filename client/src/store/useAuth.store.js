import { create } from "zustand";

const useAuthStore = create((set) => ({
  authenticated: false,
  setAuth: (value) => {
    set({ authenticated: value });
  },
}));

export const useModalActions = () => useAuthStore.getState().setAuth;
export const useModalVisibility = () =>
  useAuthStore((state) => state.authenticated);
