import React, { useEffect, useState } from "react";
import axios from "axios";
import UserItem from "./UserItem";
const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("/users").then(result => {
      setUsers(result.data);
    });
  }, []);

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Ava</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return <UserItem key={index} user={user} index={index}/>;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
