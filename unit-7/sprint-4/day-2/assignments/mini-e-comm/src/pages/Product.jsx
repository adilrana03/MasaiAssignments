import React from 'react';
import { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getData } from '../Redux/AppReducer/action';
import { Box, Button, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import ProductCart from '../components/ProductCart';

function Product(props) {
    const [page,setPage] = useState(1)
    const [sortByPrice,setSortByPrice] = useState("asc")
    const [category,setCategory] = useState("")
    const dispatch = useDispatch();
    const data = useSelector((sd)=>sd.productArr);
    const totalPages = useSelector((sd)=>sd.totalPages);

    // console.log(data,totalPages);

    useEffect(()=>{
       dispatch(getData({page,sortByPrice,category}));
    },[page,sortByPrice,category])

    const handlePrev = ()=>{
        setPage(page - 1)
   }
 
   const handleNext = ()=>{
       setPage(page + 1)
   }
 
   const handleCategory = (e)=>{
     const {value} = e.target
     setCategory(value)
   }
 
   const handlePrice = (e)=>{
     const {value} = e.target
     setSortByPrice(value)
   }


    return (
        <>
           <Box w="100%">
         <Box w="25%" display="flex" justifyContent="space-between">

             <select name = "category" onChange={handleCategory} value={category}  >
                <option value="">Filter by Category</option>
                <option value="kids">Kids</option>    
                <option value="men">Men</option>
                <option value="women">Women</option>
                <option value="homedecor">homedecor</option>
              </select>

              <select name="price" onChange={handlePrice} >
                <option value="">Sort by Price</option>
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
              </select> 
         </Box>
         <Box w="98%" >
         <SimpleGrid w="95%"  margin="auto" mt="20px" spacing={[5,5,5,5]}  columns={[1,2,2,4]} >
             {
                  data.length > 0 ?  data.map((el)=>
                        <Link to={`/product/${el.id}`} key={el.id}><ProductCart data ={el} /></Link>  
                  ) : <Heading>Loading...</Heading>
             }
            
         </SimpleGrid>
         </Box>

         <Flex w="30%" margin="auto" gap={[10,10,10,10]} marginTop="30px" align="center" justifyContent="center">
           <Button variant='solid' colorScheme='teal' disabled={page<=1} onClick={handlePrev}>Prev</Button>
           <Text color="teal" fontSize={20}>{page}</Text>
           <Button variant='solid' colorScheme='teal'  onClick={handleNext}>Next</Button>
          </Flex>       
    </Box> 
        </>
    );
}

export default Product;

// disabled={ data&&productObj.totalPages==page}