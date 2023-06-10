import { Button } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

function Home(props) {
    return (
        <div style={{display:"flex",justifyContent:"space-between",marginTop:"350px"}}>
            <Link to="/user" ><Button  colorScheme="yellow">User</Button></Link>
            <Link to="/admin"><Button  colorScheme="yellow">Admin</Button></Link>
        </div>
    );
}

export default Home;