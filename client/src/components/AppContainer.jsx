const baseClasses = "p-8 bg-primary-white h-screen overflow-y-auto flex"

const AppContainer = ({ children }) => {
  return (
    <main className={baseClasses}>
      {children}
    </main>
  );
};
export default AppContainer;
