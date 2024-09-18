import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createList,
  createTasks,
  getAllLists,
  getTasks,
} from "../services/todo.service";
import { NOTIF_TYPES, useAlert } from "./useAlert";

export const useCrteateList = () => {
  const showNotification = useAlert();
  const queryClient = useQueryClient();

  const { mutateAsync, data, isPending, isSuccess } = useMutation({
    mutationFn: async (body) => await createList(body),
    onSuccess: () => {
      showNotification({
        message: "List created",
        variant: NOTIF_TYPES.success,
      });
      queryClient.invalidateQueries({
        queryKey: [TODO_QUERY_KEYS.getList],
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

export const useCreateTask = (listId) => {
  const showNotification = useAlert();
  const queryClient = useQueryClient();

  const { mutateAsync, data, isPending, isSuccess } = useMutation({
    mutationFn: async (body) => await createTasks(body),
    onSuccess: () => {
      showNotification({
        message: "Task created",
        variant: NOTIF_TYPES.success,
      });
      queryClient.invalidateQueries({
        queryKey: [TODO_QUERY_KEYS.getTasks, listId],
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
    createNewTask: mutateAsync,
    newTask: data,
    isCreatingTask: isPending,
    isSuccess,
  };
};

export const useGetTodoTasks = (listId) => {
  const { data, isFetching, isError } = useQuery({
    queryKey: [TODO_QUERY_KEYS.getTasks, listId],
    queryFn: async () => await getTasks(listId),
    select: (data) => data.data.data,
    enabled: !!listId,
  });
  return {
    tasks: data,
    isFetchingTasks: isFetching,
    isError,
  };
};

export const TODO_QUERY_KEYS = {
  getList: "getList",
  getTasks: "getTasks",
};
