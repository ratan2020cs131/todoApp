import AppContainer from "./components/AppContainer";
import {useAuth} from "./hooks/useAuth";
import { PrimeReactProvider } from "primereact/api";
import DesignSystem from "./designSystem";
import { useModalActions } from "./store/useModal";
import Home from "./screens/home/Home.jsx";
import AuthModal from "./screens/AuthModal.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./index.css";

function App() {
  const authenticated = useAuth();
  const setModalVisibility = useModalActions();
  const queryClient = new QueryClient();

  if (!authenticated) {
    setModalVisibility(true);
  }

  return (
    <PrimeReactProvider value={{ unstyled: true, pt: DesignSystem }}>
      <QueryClientProvider client={queryClient}>
        <AppContainer>
          <Home />
          <AuthModal />
        </AppContainer>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </PrimeReactProvider>
  );
}

export default App;
