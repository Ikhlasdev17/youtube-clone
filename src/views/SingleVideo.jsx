import React from 'react'
import { useParams } from 'react-router-dom'
import { makeStyles } from '@mui/styles';
import { useSelector } from 'react-redux';
import { Typography } from '@mui/material';

const useStyle = makeStyles({
    singleVideoSection: {
        width: '100%',
        margin: '2rem auto'

    },
    singleVideo: {
        width: '100%',
        height: 500
    },
    content: {
        width: '80%',
        margin: '1rem 0'
    },
    channelName: {
        color: '#999',
        fontSize: '1.1rem',
        marginBottom: '.5rem'
    },
    title: {
        fontWeight: '600',
        fontSize: '1.4rem',
        marginBottom: '.5rem'
    },
    description: {
        fontSize: '1rem'
    }
})  

export const SingleVideo = () => {
    const {singleSelectedVideo} = useSelector(state => state.videosReducer)
    console.log(singleSelectedVideo);
    const classes = useStyle()
    const videoID = useParams()
    console.log(videoID.name);
  return (
    <div className={classes.singleVideoSection}>
        <iframe className={classes.singleVideo} id="single-video" src={`https://www.youtube.com/embed/${videoID !== undefined && videoID.name}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" allowFullScreen></iframe>
        <div className={classes.content}>
            <Typography variant='body2' className={classes.channelName}>{singleSelectedVideo.snippet.channelTitle}</Typography>
            <Typography variant='h5' color={"white"} className={classes.title} id="singleTitle">{singleSelectedVideo.snippet.title}</Typography>

            <p className={classes.description}>{singleSelectedVideo.snippet.description}</p>
        </div>
    </div>
  )
}
