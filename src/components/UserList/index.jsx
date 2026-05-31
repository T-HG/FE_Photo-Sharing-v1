import React from "react";
import { Link } from "react-router-dom";

import models from "../../modelData/models";

function UserList() {
  const users = models.userListModel();

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