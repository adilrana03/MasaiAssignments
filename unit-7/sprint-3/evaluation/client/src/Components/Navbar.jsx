import { AppBar, Toolbar, Typography, Box } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <Box sx={{flexGrow:1, marginBottom:20}} >
    <AppBar >
    <Toolbar>
        <Link to="/"><Box p={4}><Typography>Home</Typography></Box></Link>
        <Link to="/login"><Box p={4}><Typography>LOGIN</Typography></Box></Link>
        <Link to="/signup"><Box p={4}><Typography>SIGNUP</Typography></Box></Link>
        <Link to="/posts"><Box p={4}><Typography>Posts</Typography></Box></Link>
        {/* <Link to="/signup"><Box p={4}><Typography>SIGNUP</Typography></Box></Link> */}
    </Toolbar>
</AppBar>
</Box>
  )
}

export default Navbar