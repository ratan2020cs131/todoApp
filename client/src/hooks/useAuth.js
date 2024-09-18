import { useMutation } from "@tanstack/react-query";
import { postEmail } from "../services/auth.service";
import { useAuthActions } from "../store/useAuth.store";
import { NOTIF_TYPES, useAlert } from "./useAlert";

export const useAuth = () => {
  const email = localStorage.getItem("email");
  if (email) return true;
  return false;
};

export const useGetEmail = () => {
  const { setAuth, setOtpSent } = useAuthActions();
  const showNotification = useAlert();

  const { mutateAsync, data, isPending, isSuccess } = useMutation({
    mutationFn: async (body) => await postEmail(body),
    onSuccess: () => {
      setOtpSent(true);
      showNotification({
        message: "Verification OTP sent to mail",
        variant: NOTIF_TYPES.success,
      });
    },
    onError: () => {
      setAuth(false);
      showNotification({
        message: "Error sending email",
        variant: NOTIF_TYPES.failure,
      });
    },
  });

  return {
    sendEmail: mutateAsync,
    authData: data,
    isAuthenticating: isPending,
    isSuccess,
  };
};
