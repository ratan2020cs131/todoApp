import TextInput from "./components/TextInput";
import AppContainer from "./components/AppContainer";
import Task from "./components/Task";
import useAuth from "./hooks/useAuth";
import "./index.css";
import { PrimeReactProvider } from "primereact/api";
import DesignSystem from "./designSystem";
import { useModalActions } from "./store/useModal";
import Modal from "./components/Modal";

function App() {
  const authenticated = useAuth();
  const setModalVisibility = useModalActions();

  console.log(setModalVisibility);
  

  return (
    <PrimeReactProvider value={{ unstyled: true, pt: DesignSystem }}>
      <AppContainer>
        <div className="flex flex-col items-center w-full gap-4">
          <TextInput />
          <Task />
          <button onClick={() => setModalVisibility(true)}>submit</button>
          <Modal header="Enter you email"/>
        </div>
      </AppContainer>
    </PrimeReactProvider>
  );
}

export default App;
