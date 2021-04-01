import "./App.css";
import { Box, ThemeProvider } from "@material-ui/core";
import Home from "./pages/Home";
import { v1Theme } from "./constants/styles";

function App() {
  return (
    <ThemeProvider theme={v1Theme}>
      <Box bgcolor="primary.light" className="app">
        <Home></Home>
      </Box>
    </ThemeProvider>
  );
}

export default App;
