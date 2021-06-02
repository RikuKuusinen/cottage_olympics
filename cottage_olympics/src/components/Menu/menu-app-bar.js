import React from "react";
import { createMuiTheme, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import SimpleMenu from "./simple-menu";
import AppBarImage from "./app-bar-image";

const theme = createMuiTheme({
  palette: {
    background: {
      xs: "red",
      sm: "blue",
      md: "green",
    },
  },
});

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },

  title: {
    flexGrow: 1,
    fontWeight: 600,
  },
  test: {
    background: "#1B065E !important",
  },
  menuapp: {
    height: "10em",
    width: "14em",
    padding: 0,
    marginTop: "-10px",
    marginBottom: "-12px",
    textOverflow: "ellipsis",
  },
  menuapp2: {
    "& .MuiIconButton-label ": {
      textOverflow: "ellipsis",
      fontSize: "12px",
      paddingLeft: "3px",
    },
    "& .MuiSvgIcon-root": {
      paddingRight: "6px",
    },
  },
}));

export default function MenuAppBar({ user }) {
  const username = user ? user.UserName : "";
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          ></IconButton>
          <Typography variant="h5" className={classes.title}>
            Mökkiolympialaiset
          </Typography>
          {auth && (
            <div className={classes.menuapp2}>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle></AccountCircle>
                {username}
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem className={classes.menuapp} onClick={handleClose}>
                  <AppBarImage
                    username={username}
                    className={classes.menuapp}
                  ></AppBarImage>
                </MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
