import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { useLocation, matchPath } from "react-router-dom";

import "./styles.css";

/**
 * Define TopBar, a React component of Project 4.
 */
import fetchModelData from "../../lib/fetchModelData";
function TopBar () {
  const location = useLocation();

  const [context, setContext] = useState("Users");

  useEffect(() => {
    const userMatch = matchPath("/users/:userId", location.pathname);
    const photoMatch = matchPath("/photos/:userId", location.pathname);
    
    if (userMatch){
      fetchModelData(`/user/${userMatch.params.userId}`).then((user) =>{
        setContext(`${user.first_name} ${user.last_name}`);
      });
      return;
    }
    if (photoMatch){
      fetchModelData(`/user/${photoMatch.params.userId}`).then((user) => {
        setContext(`Photo of ${user.first_name}  ${user.last_name}`);
      });
      return;
    }
  
    setContext("Users");
  },[location.pathname]);

    return (
      <AppBar className="topbar-appBar" position="absolute">
        <Toolbar>
          <Typography variant="h5" color="inherit">
            Nguyễn Văn Thắng
          </Typography>
          <div style={{ margin: "auto"}}>
            {context}
          </div>
        </Toolbar>
      </AppBar>
    );
}

export default TopBar;
