import { useMutation } from "@tanstack/react-query";
import { postEmail, verifyOtp } from "../services/auth.service";
import { useAuthActions, useAuthStates } from "../store/useAuth.store";
import { NOTIF_TYPES, useAlert } from "./useAlert";

export const useAuth = () => {
  const { authenticated } = useAuthStates();
  const email = sessionStorage.getItem("email");
  if (email || authenticated) return true;
  return false;
};

export const useGetEmail = () => {
  const { setOtpSent } = useAuthActions();
  const showNotification = useAlert();

  const { mutateAsync, data, isPending, isSuccess } = useMutation({
    mutationFn: async (body) => await postEmail(body),
    onSuccess: (data) => {
      console.log({ data });
      setOtpSent(true);
      showNotification({
        message: "Verification OTP sent to mail",
        variant: NOTIF_TYPES.success,
      });
    },
    onError: () => {
      setOtpSent(false);
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

export const useVerifyOtp = () => {
  const { setAuth } = useAuthActions();
  const showNotification = useAlert();

  const { mutateAsync, data, isPending, isSuccess } = useMutation({
    mutationFn: async (body) => await verifyOtp(body),
    onSuccess: (data) => {
      const { data: resData } = data;
      setAuth(true);
      sessionStorage.setItem("email", resData.data.email);
      showNotification({
        message: "User verification done",
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
    sendOtp: mutateAsync,
    authData: data,
    isVerifyingOtp: isPending,
    isSuccess,
  };
};
