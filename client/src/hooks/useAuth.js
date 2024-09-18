import { useMutation } from "@tanstack/react-query";
import { postEmail } from "../services/auth.service";
import { useModalActions } from "../store/useAuth.store";

export const useAuth = () => {
  const email = localStorage.getItem("email");
  if (email) return true;
  return false;
};

export const useGetEmail = () => {
  const setAuth = useModalActions();

  const { mutateAsync, data, isPending, isSuccess } = useMutation({
    mutationFn: async (body) => await postEmail(body),
    onSuccess: () => {
      setAuth(true);
    },
  });

  return {
    sendEmail: mutateAsync,
    authData: data,
    isAuthenticating: isPending,
    isSuccess,
  };
};
