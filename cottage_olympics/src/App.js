import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/home";
import Statistics from "./components/statistics";
import Pictures from "./components/pictures";
import Container from "@material-ui/core/Container";

import Box from "@material-ui/core/Box";
import renkaat2 from "./images/renkaat2.jpg";
import ballon from "./images/30balloons.jpg";
import MenuAppBar from "./components/Menu/menu-app-bar";
import SimpleBottomNavigation from "./components/Menu/simple-bottom-navigation";
import LoginForm from "./components/login-form";
import { createMuiTheme, makeStyles } from "@material-ui/core";
import { ThemeProvider } from "styled-components";
import { MuiThemeProvider } from "material-ui/styles";

const styles = {
  paperContainer: {
    backgroundImage: `url(${ballon})`,
    height: "100vh",
    backgroundPosition: "center" /* Center the image */,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    color: "white",
    paddingLeft: 0,
    paddingRight: 0,
  },
};

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FFFF",
    },
  },
});

const useStyles = makeStyles({
  boxStyles: {
    backgroundColor: "#1b065e",
    padding: "1rem",
    margin: "1rem",
    opacity: "0.8",
    borderRadius: 15,
  },
  inputStyles: {
    color: "white",
    border: "6px white",
  },
});

const App = () => {
  const classes = useStyles();

  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedCottageAppUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
    }
  }, []);
  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const user = { username: username };
      window.localStorage.setItem("loggedCottageAppUser", JSON.stringify(user));
      setUser(user);
      setUsername("");
    } catch (exception) {
      console.log(exception);
    }
  };
  const loginForm = () => (
    <Container maxWidth="sm" style={styles.paperContainer} user={user}>
      <MenuAppBar></MenuAppBar>
      <Box my={4} className={classes.boxStyles}>
        <LoginForm
          className={classes.inputStyles}
          username={username}
          handleUsernameChange={({ target }) => setUsername(target.value)}
          handleSubmit={handleLogin}
        />
      </Box>
    </Container>
  );

  return (
    <MuiThemeProvider>
      <Router>
        <ThemeProvider theme={theme}>
          {user === null ? (
            loginForm()
          ) : (
            <Container maxWidth="sm" style={styles.paperContainer}>
              <MenuAppBar user={user}></MenuAppBar>
              <Box my={4} className={classes.boxStyles}>
                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                  <Route path="/statistics">
                    <Statistics />
                  </Route>
                  <Route path="/pictures">
                    <Pictures />
                  </Route>
                  <Route path="/">
                    <Home />
                  </Route>
                </Switch>
              </Box>
              <SimpleBottomNavigation></SimpleBottomNavigation>
            </Container>
          )}
        </ThemeProvider>
      </Router>
    </MuiThemeProvider>
  );
};

export default App;
