import React, { useEffect, useState } from "react";
import {Button, Typography} from "@mui/material";

import "./styles.css";
import fetchModelData from "../../lib/fetchModelData";
import {Link, useParams } from "react-router-dom";
/**
 * Define UserDetail, a React component of Project 4.
 */
function UserDetail() {
    const {userId} = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
      fetchModelData(`/user/${userId}`).then((data) => {
        setUser(data);
      });
    },[userId]);

    if (!user) {
      return(
        <div>User not found</div>
      );
    }
    return (
       <div>
          <h2>
            {user.first_name} {user.last_name}
          </h2>

          <p> Location: {user.location}</p>
          <p>Occupation: {user.occupation}</p>
          <p>Description: {user.description}</p>

          <Link to ={`/photos/${userId}`}>View Photos</Link>
       </div>
    );
}

export default UserDetail;
