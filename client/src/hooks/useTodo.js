import { useMutation } from "@tanstack/react-query";
import { createList } from "../services/todo.service";
import { NOTIF_TYPES, useAlert } from "./useAlert";

export const useCrteateList = () => {
  const showNotification = useAlert();

  const { mutateAsync, data, isPending, isSuccess } = useMutation({
    mutationFn: async (body) => await createList(body),
    onSuccess: () => {
      showNotification({
        message: "List created",
        variant: NOTIF_TYPES.success,
      });
    },
    onError: () => {
      showNotification({
        message: "Error creating list",
        variant: NOTIF_TYPES.failure,
      });
    },
  });
  return {
    createNewList: mutateAsync,
    newList: data,
    isCreatingList: isPending,
    isSuccess,
  };
};
