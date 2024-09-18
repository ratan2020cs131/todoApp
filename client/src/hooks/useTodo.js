import { useMutation, useQuery } from "@tanstack/react-query";
import { createList, getAllLists } from "../services/todo.service";
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

export const useGetTodoLists = () => {
  const { data, isFetching, isError } = useQuery({
    queryKey: [TODO_QUERY_KEYS.getList],
    queryFn: async () => await getAllLists(),
    select: (data) => data.data.data,
  });
  return {
    lists: data,
    isFetching,
    isError,
  };
};

export const TODO_QUERY_KEYS = {
  getList: "getList",
};
