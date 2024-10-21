import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { ThemeProvider } from "./contexts/themeContext";
import Layout from "./screens/Layout";

function App() {
  const queryClient = new QueryClient();
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <Layout />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
