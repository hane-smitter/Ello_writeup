import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";

// // import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <div>Page content</div>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
