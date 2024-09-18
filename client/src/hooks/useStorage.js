export const useGetStorageItem = ({ key }) => {
  return sessionStorage.getItem(key);
};

export const STORAGE_KEYS = {
  email: "email",
  userId: "userId",
};
