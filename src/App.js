import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Paper from "@mui/material/Paper";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useState } from "react";
import Button from "@mui/material/Button";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

import "./App.css";
import Header from "./Header";
import Home from "./Home";
import SearchPage from "./SearchPage";
import Login from "./Login";
import Signup from "./Signup";
import Addrooms from "./Addrooms";
import Editrooms from "./Editrooms";
import  Roomdetails  from "./Roomdetails";


function App() {
  //theme setting//
  const [mode, setmode] = useState("light");
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={1} style={{ borderRadius: "0px", minHeight: "100vh" }}>
        <div className="App">
          <Router>
            <Button
              variant="text"
              color="inherit"
              style={{ marginLeft: "auto" }}
              onClick={() => setmode(mode === "light" ? "dark" : "light")}
              startIcon={
                mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />
              }
            >
              {mode === "light" ? "dark" : "light"} mode
            </Button>
            <Header />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/addrooms">
                <Addrooms />
              </Route>
              <Route path="/airbnb/edit/:id">
                <Editrooms />
              </Route>
              <Route path="/search">
                <SearchPage />
              </Route>
              <Route path="/signup">
                <Signup />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/rooms/:id">
                <Roomdetails/>
              </Route>
            </Switch>
          </Router>
        </div>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
