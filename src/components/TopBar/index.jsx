import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { useLocation, matchPath } from "react-router-dom";

import "./styles.css";

/**
 * Define TopBar, a React component of Project 4.
 */
import models from "../../modelData/models";
function TopBar () {
  const location = useLocation();

  let context = "Users";

  const userMatch = matchPath("/users/:userId", location.pathname);
  const photoMatch = matchPath("/photos/:userId", location.pathname);

  if (userMatch){
    const user = models.userModel(userMatch.params.userId);
    if (user){
      context = `${user.first_name} ${user.last_name}`;
    }
  }

  if (photoMatch){
    const user = models.userModel(photoMatch.params.userId);
    if (user){
      context = `Photo of ${user.first_name} ${user.last_name}`;
    }
  }
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
