import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";

// // import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import theme from "./theme";
import Search from "./components/Search";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <main style={{ paddingBlockStart: 20 }}>
        <Search />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
