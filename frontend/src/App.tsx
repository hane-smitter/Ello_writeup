import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";

// // import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import theme from "./theme";
import Content from "./components/Content";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Content />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
