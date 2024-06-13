import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      100: "#CFFAFA", // Turquoise light
      main: "#5ACCCC", // Turquoise
      600: "#53C2C2", // Turquoise dark 1
      700: "#28B8B8", // Turquoise dark 2
    },
    secondary: {
      100: "#FFE6DC", // Orange Pastel
      main: "#F76434", // Orange Red
    },
    error: {
      main: red.A400,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
      body {
        font-family: "Mulish Variable", sans-serif;
        background-color: #F9FBFD;
        font-weight: 400;
      }
    `,
    },
  },
  typography: { fontFamily: `"Mulish Variable", sans-serif` },
});

export default theme;
