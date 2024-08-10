import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#00bcd4", 
    },
    secondary: {
      main: "#ff4081", 
    },
    background: {
      default: "linear-gradient(135deg, #1e3c72 30%, #2a5298 70%)", 
      paper: "linear-gradient(135deg, #1f2e3d 30%, #5b9aa0 70%)", 
    },
    text: {
      primary: "#ffffff", 
      secondary: "#cfcfcf", 
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    h6: {
      fontWeight: 600,
      letterSpacing: "0.1em",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: "linear-gradient(135deg, #1e3c72 30%, #2a5298 70%)",
          minHeight: "100vh",
          padding: 0,
          margin: 0,
        },
      },
    },
  },
});

export function CustomTheme({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
