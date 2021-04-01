import { createMuiTheme } from "@material-ui/core/styles";

export const v1Theme = createMuiTheme({
  typography: {
    fontFamily: ["-apple-system"],
  },
  palette: {
    primary: {
      main: "#6600E8",
      light: "#F0E5FD",
    },
    secondary: {
      main: "#000000",
      contrastText: "#FFFFF",
    },
  },
});
