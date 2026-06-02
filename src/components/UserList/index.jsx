import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import fetchModelData from "../../lib/fetchModelData";

function UserList() {
  const [users, setUsers ] = useState([]);

  useEffect(() => {
    fetchModelData("/user/list").then((data) =>{
      setUsers(data);
    });
  },[]);
  return (
    <div>
      {users.map((user) => (
        <div key={user._id}>
          <Link to={`/users/${user._id}`}>
            {user.first_name} {user.last_name}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default UserList;