import { Grid } from '@mui/material';
import React from 'react'
import { Route, Routes } from 'react-router-dom';
import History from '../../views/History';
import Home from '../../views/Home'
import { Sidebar } from '../Sidebar/Sidebar';
export const Main = () => {
  return (
    <>
          <Grid container spacing={4}>
                  <Grid item xs={0} md={2}>
                    <Sidebar />
                  </Grid>
                  <Grid item xs={12} md={10}>
                    <Routes>
                      <Route path='/history' element={<History />} />
                      <Route path='/' element={<Home />} />
                    </Routes>
                  </Grid>
          </Grid>
    </>
  )
}
