import { create } from "zustand";

const useAuthStore = create((set) => ({
  authenticated: false,
  otpSent: false,
  actions: {
    setAuth: (value) => {
      set({ authenticated: value });
    },
    setOtpSent: (value) => {
      set({ otpSent: value });
    },
  },
}));

export const useAuthActions = () => useAuthStore.getState().actions;
export const useAuthStates = () => {
  const state = useAuthStore();
  return { authenticated: state.authenticated, otpSent: state.otpSent };
};
