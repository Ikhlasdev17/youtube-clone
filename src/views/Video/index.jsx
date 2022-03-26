import { Container, Grid } from '@mui/material'
import React from 'react'
import { SingleVideo } from '../SingleVideo'
import VideoList from '../VideoList'

export const Video = () => {
  return (
    <Container style={{maxWidth: '1600px'}}>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={8}>
             <SingleVideo />
            </Grid>
            <Grid item xs={0} sm={4}>
             <VideoList />
            </Grid>
    </Grid>
    </Container>
  )
}
