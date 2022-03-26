import { Search, VideoCall, ViewComfy } from '@mui/icons-material'
import { AppBar, Avatar, Badge, Button, IconButton, Input, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import logo from '../../assets/images/youtube.png'
import { Notifications } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { searchVideos } from '../../reducer/mainReducer'

export const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()

    if(searchTerm !== "") {
      dispatch(searchVideos(searchTerm))
    } else {
      dispatch(searchVideos("React"))
    }


  }

  return (
    <AppBar className="header">
      <Toolbar className='header__nav'>
            <Link to="/">
            <img src="https://clone-afc5e.web.app/static/media/youtube_dark.7c6b240a.png" alt="Youtube" width={130} />
            </Link>

            <form className='nav__search' onSubmit={handleSubmit}>
              <input 
                placeholder='Введите вопрос'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="search-button"><Search /> </button>
            </form>


            <div className='navbar_icons'>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
                <VideoCall />
              </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
                <ViewComfy />
              </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <Notifications />
              </Badge>
              </IconButton>

              <Avatar style={{marginLeft: '.8rem'}} src='https://media.graphcms.com/vAyg42YSoOImejaqhyB6' alt="Ikhlas Aralbaev" />
            </div>
      </Toolbar>
    </AppBar>
  )
}
