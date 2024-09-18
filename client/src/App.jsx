import TextInput from "./components/TextInput";
import AppContainer from "./components/AppContainer";
import Task from "./components/Task";
import useAuth from "./hooks/useAuth";
import { PrimeReactProvider } from "primereact/api";
import DesignSystem from "./designSystem";
import { useModalActions } from "./store/useModal";
import "./index.css";
import Button from './components/Button'

function App() {
  const authenticated = useAuth();
  const setModalVisibility = useModalActions();

  return (
    <PrimeReactProvider value={{ unstyled: true, pt: DesignSystem }}>
      <AppContainer>
        <div className="flex flex-col items-center w-full gap-4">
          <TextInput />
          <Task />
          <Button />
        </div>
      </AppContainer>
    </PrimeReactProvider>
  );
}

export default App;
