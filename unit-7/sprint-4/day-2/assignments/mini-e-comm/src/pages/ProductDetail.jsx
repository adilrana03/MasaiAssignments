import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCart, getDetailData } from '../Redux/AppReducer/action';
import { Button, ButtonGroup, Card, CardBody, CardFooter, Heading, Image, Stack, Text } from '@chakra-ui/react'

function ProductDetail(props) {
    const {id} = useParams();
    const data = useSelector((sd)=>sd.singleData);
    const dispatch = useDispatch();


    useEffect(()=>{
        dispatch(getDetailData(id));
    },[id])

    const handleCart = ()=>{
       dispatch(getCart(id));
    }

    return (
        <div style={{width : "30%",margin:"30px auto"}}>
            <img src={data.image} alt={data.title} width="400px"/>
            <h1 style={{fontSize:"30px"}}>{data.title}</h1>
            <p>Brand : {data.brand}</p>
            <p>Price : {data.price}</p>
            <p>Category : {data.category}</p>
          <Button variant="solid" colorScheme="blue" position="center" onClick={handleCart} margin="auto">
            Add to cart
          </Button>
        </div>
    );
}

export default ProductDetail;