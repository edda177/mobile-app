import { ThemeProvider } from "./context/ThemeContext";
import Navigation from "./navigation/Navigation";
import { AuthProvider } from "./context/AuthContext";
import { NewsProvider } from "./context/NewsContext";

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <NewsProvider>
          <Navigation />
        </NewsProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
