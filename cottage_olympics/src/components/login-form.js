import React, { useState, useEffect } from "react";

const LoginForm = ({ handleSubmit, handleUsernameChange, username }) => {
  return (
    <div>
      <h2>Kirjaudu</h2>

      <form onSubmit={handleSubmit}>
        <div>
          username
          <input value={username} onChange={handleUsernameChange} />
        </div>
        <button type="submit">Kirjaudu</button>
      </form>
    </div>
  );
};

export default LoginForm;
