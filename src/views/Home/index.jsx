import axios from "axios";
import React, { useEffect, useState } from "react";
import URL from "../../api/URL";
import { useSelector, useDispatch } from "react-redux";
import { fetchedVideos, fetchingVideos, selectedVideo, timeViewVideo } from "../../reducer/mainReducer";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  List,
  Typography,
} from "@mui/material";
import moment from "moment";
import { AccessTime, FormatListBulleted } from "@mui/icons-material";
import { Link } from "react-router-dom";
function Home() {
  const dispatch = useDispatch();
  const { timeViewVideos, defaultVideos, fetchingStatus, searchTerm } = useSelector(
    (state) => state.videosReducer
  );
  useEffect(() => {
    dispatch(fetchingVideos());
    axios
      .get("https://www.googleapis.com/youtube/v3/search", {
        params: {
          part: "snippet",
          maxResults: 50,
          key: "AIzaSyC5ZK-KdqnPXSFgnNuKI05NGbsW2t5R-0w",
          q: searchTerm,
        },
      })
      .then((res) => dispatch(fetchedVideos(res.data.items)));
  }, [searchTerm]);

  if (fetchingStatus === "loading") {
    return (
      <Typography variant="h5" color={"primary"}>
        Loading...
      </Typography>
    );
  }


  const handleTimeView = (video) => {
    dispatch(timeViewVideo(video))
    console.log(timeViewVideos);
  }

  return (
    <Grid container>
      {defaultVideos && defaultVideos.length > 0 ? (
        defaultVideos.map((video) => (
          <Grid item xs={12} sm={6} md={3} >
            <Card
              className={`video-card`}
              style={{ backgroundColor: "#181818" }}
              sx={{ maxWidth: 360 }}
            >
            <Link to={`/video/${video.id.videoId}`} onClick={() => dispatch(selectedVideo(video))}>
              <CardMedia
                component={"img"}
                height="160px"
                image={video.snippet.thumbnails.medium.url}
              />
            </Link>

              <CardContent>
                <Typography
                  variant="body2"
                  color="white"
                  className="card-title"
                >
                  {`${video.snippet.title && video.snippet.title.slice(0, 50)}...`}
                </Typography>
                <span className="channel-title">
                  {video.snippet.channelTitle}
                </span>
                <span className="createdAt">
                  {moment(video.snippet.publishedAt).fromNow()}
                </span>
              </CardContent>
              <CardActions>
                <Button
                  className="card-action-btn"
                  size="small"
                  startIcon={<AccessTime />}
                  onClick={() => handleTimeView(video)}
                >
                  Смотреть позже
                </Button>
                <Button
                  className="card-action-btn"
                  size="medium"
                  startIcon={<FormatListBulleted />}
                >
                  Добавить в очеред
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))
      ) : (
        <Typography>Videos not exist</Typography>
      )}
    </Grid>
  );
}

export default Home;
