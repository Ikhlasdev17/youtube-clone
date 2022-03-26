import { Grid } from '@mui/material'
import React from 'react'
import { Navbar } from './Navbar/Navbar'
import { Sidebar } from './Sidebar/Sidebar'
import { Main } from './Main/Main'
import { Route, Routes } from 'react-router-dom'
import { Video } from '../views/Video'

export const Layout = () => {
  return (
    <>
        <Navbar/>
        <Routes>
          <Route path='*' element={<Main />} />
          <Route path='/video/:name' element={<Video />} />
        </Routes>
        
    </>
  )
}
