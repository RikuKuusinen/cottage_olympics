import React, { useState, useEffect } from "react";
import userService from "../services/users";

const Statistics = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    userService.getAll().then((users) => {
      console.log(users);
      setUsers(users);
    });
  }, []);

  return (
    <div>
      <h2>Tilastot</h2>
      {users.map((user, i) => (
        <div key={i}>{user.UserName}</div>
      ))}
    </div>
  );
};

export default Statistics;
