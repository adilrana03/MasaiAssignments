import React from 'react'
import {Box} from '@mui/material';
import {Routes, Route} from 'react-router-dom'
import Home from './Page/Home';
import Signup from './Page/Signup';
import Login from './Page/Login';
import Post from './Page/Post';
function AllRoutes() {
  return (
    <Box>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/posts" element={<Post/>}/>

        </Routes>
    </Box>
  )
}

export default AllRoutes