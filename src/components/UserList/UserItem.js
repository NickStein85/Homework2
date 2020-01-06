import React from "react";


const UserItem = ({ user, index }) => {
    return (
        <tr>
      <th scope="row">{index +1}</th>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>{user.password}</td>
      <td><img src={user.profilepic} width="100px" alt="" /></td>
    </tr>
    );
};

export default UserItem;