const useAuth = () => {
  const email = localStorage.getItem("email");
  if (email) return true;
  return false;
};
export default useAuth;
