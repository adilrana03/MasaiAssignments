import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
    return (
        <div style={{display:"flex",justifyContent:"space-evenly",backgroundColor:"black",alignItems:"center",height : "55px"}}>
            <Link to="/" style={{color:"white"}}>Products</Link>
            <Link to="/order" style={{color:"white"}}>Orders</Link>
            <Link to="/cart" style={{color:"white"}}>Cart</Link>
        </div>
    );
}

export default Navbar;