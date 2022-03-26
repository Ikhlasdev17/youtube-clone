import React from 'react'
import { makeStyles } from '@mui/styles';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import moment from 'moment';
const useStyles = makeStyles({
    sidebar: {
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
        maxHeight: '150vh',
        overflow: 'auto',
        position: 'sticky',
        top: '0'
    },
    card: {
        display: 'flex',
        gap: '.5rem',
        marginBottom: '.5rem'
    },
    cardImage: {
        width: '150px'
    },
    title: {
        fontSize: '.900rem'
    },
    exInfo: {
        color: "#999",
        fontSize: '.768rem'
    }
})
const VideoList = () => {
    const classes = useStyles()
    const {defaultVideos} = useSelector(state => state.videosReducer)
  return (
    <div className={classes.sidebar}>
      {defaultVideos && defaultVideos.length > 0 ? (
          defaultVideos.map(video => {
            return(
                <div className={classes.card} key={video.id.videoId} >
                <Link to={`/video/${video.id.videoId}`}>
                <div>
                    <img className={classes.cardImage} src={video.snippet.thumbnails.medium.url} alt="" />
                </div>
                </Link>
    
                <div className="card-body">
                    <Typography variant='h6' className={classes.title} id="title"  style={{fontSize: '.900rem'}}>
                        {video.snippet.title}
                    </Typography>
                    <Typography variant='body2' className={classes.exInfo} id="exInfo">
                        {video.snippet.channelTitle}
                    </Typography>
                    <Typography variant='body2' className={classes.exInfo} id="exInfo">
                        {moment(video.snippet.publishTime).fromNow()}
                     </Typography>
                </div>
                </div>)
          })
      ) : (<h1>Videos not exist</h1>)}
    </div>
  )
}

export default VideoList
