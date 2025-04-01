const baseClasses = "p-8 bg-primary-white h-screen overflow-y-auto flex justify-center"

const AppContainer = ({ children }) => {
  return (
    <main className={baseClasses}>
      {children}
    </main>
  );
};
export default AppContainer;
