import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Create } from "./Create";
import { Notes } from "./Notes";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { purple } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fefefe",
    },
    secondary: purple,
  },
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Route path="/" exact component={Create} />
        <Route path="/notes" exact component={Notes} />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
