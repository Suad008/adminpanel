import "./App.css";
import { ThemeProvider } from "@mui/material";
import AuthBox from "components/auth/AuthBox";
import Theme from "assets/styles/Theme";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <AuthBox />
    </ThemeProvider>
  );
}

export default App;
