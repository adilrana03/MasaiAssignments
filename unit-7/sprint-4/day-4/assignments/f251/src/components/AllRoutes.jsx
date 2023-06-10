import React from 'react';
import { Routes,Route } from 'react-router-dom';
// import Data from '../pages/Data';
import Home from '../pages/Home';
import Login from '../pages/Login';
// import Reports from '../pages/Reports';
import User from '../pages/User';
import Admin from '../pages/Admin';

function AllRoutes(props) {
    return (
        <Routes>
            <Route path="/user" element={< User/>} />
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/admin" element={<Admin />} />
        </Routes>
    );
}

export default AllRoutes;