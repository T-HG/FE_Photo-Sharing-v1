import React from "react";
import { Typography } from "@mui/material";

import "./styles.css";
import {useParams, Link} from "react-router-dom";
import models from "../../modelData/models";

/**
 * Define UserPhotos, a React component of Project 4.
 */
function UserPhotos () {
    const {userId} = useParams();
    const photos = models.photoOfUserModel(userId);
    return (
      <div> 
        {photos.map((photo) => (
          <div key ={photo._id}>
          <img
            src = {require(`../../images/${photo.file_name}`)}
            alt={photo.file_name}
            width="300"          
          />

          <p>Date: {photo.date_time}</p>

          <h4>Comments</h4>
          {photo.comments && photo.comments.map((comment) => (
            <div key={comment._id}>
              <p>{comment.comment}</p>
              <p>
                By:{" "}
                <Link to={`/users/${comment.user._id}`}>{comment.user.last_name} {comment.user.first_name}</Link>
              </p>
              <p>{comment.date_time}</p>
            </div>
          ))}

            <hr />
          </div>
        ))}
      </div>
    );
}

export default UserPhotos;
