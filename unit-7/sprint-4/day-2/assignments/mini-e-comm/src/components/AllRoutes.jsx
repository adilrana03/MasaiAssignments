import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Cart from '../pages/Cart';
import Order from '../pages/Order';
import Product from '../pages/Product';
import ProductDetail from '../pages/ProductDetail';

function AllRoutes(props) {
    return (
        <Routes>
            <Route path="/" element={<Product />} />
            <Route path="/order" element={<Order />} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
    );
}

export default AllRoutes;