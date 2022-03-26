import React from 'react'
import { useSelector } from 'react-redux';
import { Grid, Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { AccessTime } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { fetchedVideos, fetchingVideos, selectedVideo } from "../../reducer/mainReducer";


const History = () => {
    const {history} = useSelector(state => state.videosReducer)
    console.log(history);
    const dispatch = useDispatch()
  return (
    <>
      <Grid container>
      {history && history.length > 0 ? (
        history.map((video) => (
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
            </Card>
          </Grid>
        ))
      ) : (
        <Typography>Videos not exist</Typography>
      )}
    </Grid> 
    </>
  )
}

export default History
