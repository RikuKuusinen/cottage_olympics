import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SportsList from "./components/sports-list/sports-list";
import Statistics from "./components/statistics";
import Pictures from "./components/pictures/pictures";
import Container from "@material-ui/core/Container";

import Box from "@material-ui/core/Box";
//import renkaat2 from "./images/renkaat2.jpg";
import ballon from "./images/30balloons2.png";
import MenuAppBar from "./components/Menu/menu-app-bar";
import SimpleBottomNavigation from "./components/Menu/simple-bottom-navigation";
import LoginForm from "./components/login-form";
import { createMuiTheme, makeStyles } from "@material-ui/core";
import { ThemeProvider } from "styled-components";
import { MuiThemeProvider } from "material-ui/styles";
import users from "./services/usersService";
import SingleSport from "./components/single-sport/single-sport";
import Dashboard from "./components/Dashboard/dashboard";

const styles = {
  paperContainer: {
    backgroundImage: `url(${ballon})`,

    height: "100%",
    minHeight: "100vh",
    backgroundPosition: "-5rem 14rem" /* Center the image */,
    backgroundRepeat: "space",
    //backgroundColor: "#383838",
    backgroundColor: "#383838",
    color: "white",
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 100,
  },
};

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FFFF",
    },
    secondary: {
      main: "#FFFF",
    },
  },
});

const useStyles = makeStyles({
  boxStyles: {
    backgroundColor: "#1b065e",
    padding: "1rem",
    margin: "1rem",
    //opacity: "0.8",
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
    async function getOrCreateUser() {
      const loggedUserJSON = window.localStorage.getItem(
        "loggedCottageAppUser"
      );
      if (loggedUserJSON) {
        const u = JSON.parse(loggedUserJSON);
        console.log(u);
        var result = await users.getUser(u.UserName);
        console.log(result);
        if (result) {
          setUser(result);
        } else {
          window.localStorage.removeItem("loggedCottageAppUser");
        }
      }
    }
    getOrCreateUser();
  }, []);

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const user = { userName: username };
      var asd = await users.createIfNeeded(user);
      console.log(asd);
      window.localStorage.setItem("loggedCottageAppUser", JSON.stringify(asd));
      setUser(asd);
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
                  <Route path="/sport/:id">
                    <SingleSport user={user} />
                  </Route>
                  <Route path="/sports">
                    <SportsList />
                  </Route>
                  <Route path="/">
                    <Dashboard />
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
