import { useCallback } from "react";
import toast from "react-hot-toast";

export const NOTIF_TYPES = {
  success: "success",
  failure: "failure",
};

export const useAlert = () => {
  const showAlert = useCallback(async ({ message, variant }) => {
    switch (variant) {
      case NOTIF_TYPES.success:
        return toast.success(message, {
          duration: 3000,
          position: "top-center",
        });

      case NOTIF_TYPES.failure:
        return toast.error(message, {
          duration: 3000,
          position: "top-center",
        });
    }
  }, []);
  return showAlert;
};
