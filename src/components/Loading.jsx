import React from 'react'

import { makeStyles } from '@mui/styles'

import logo from '../assets/images/youtube-logo-transparent-png-pictures-394588 (1).png'

const useStyles = makeStyles({
    container: {
        height: '100vh',
        position: 'fixed',
        width: '100%',
        background: '#121212',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        top: '0',
        left: '0'
    }
})

export const Loading = () => {
    const classes = useStyles()
    
  return (
    <div className={classes.container}>
        <img src={logo} alt="Youtube" width={200} />
    </div>
  )
}
