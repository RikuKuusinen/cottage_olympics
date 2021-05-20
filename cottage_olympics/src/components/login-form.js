import { Button } from "@material-ui/core";
import { TextField } from "material-ui";
import React, { useState, useEffect } from "react";

const stylesFn = () => ({
  input: {
    color: "blue",
  },
  focused: {
    background: "red",
  },
});

const LoginForm = ({
  handleSubmit,
  handleUsernameChange,
  username,
  className,
}) => {
  return (
    <div>
      <form onSubmit={handleSubmit} noValidate autoComplete="off">
        <TextField
          className={className}
          id="outlined-basic"
          label="Käyttäjätunnus"
          variant="outlined"
          value={username}
          onChange={handleUsernameChange}
          inputStyle={{ color: "white" }}
          floatingLabelText="Käyttäjätunnus"
          floatingLabelStyle={{ color: "white" }}
        />
        <Button type="submit" variant="contained" color="primary">
          Kirjaudu
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
