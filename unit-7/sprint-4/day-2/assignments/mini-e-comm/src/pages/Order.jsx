import React from 'react';
import { useSelector } from 'react-redux';
import { Card, CardBody, Heading, Image, Stack, Text,SimpleGrid, Button } from '@chakra-ui/react'

function Order(props) {
    const order = useSelector((sd)=>sd.order);

    return (
        <div>
        <Heading>Order Page</Heading>
        <SimpleGrid w="95%"  margin="auto" mt="20px" spacing={[5,5,5,5]}  columns={[1,2,2,4]} >
        { order.length > 0 ?  
          
              order.map((el)=>{
                return <Card w='100%' variant="outline" position="none" key={el.id}>
                <CardBody>
                  <Image
                    src={el.image}
                    alt={el.brand}
                    borderRadius='lg'
                  />
                  <Stack mt='3' spacing='3'>
                    <Heading size='lg'>{el.brand}</Heading>
                    <Text>
                       {el.title}
                    </Text>
                    <Text>
                       {el.category}
                    </Text>
                    <Text color='blue.600' fontSize='2xl'>
                    ₹{el.price}
                    </Text>
                  </Stack>
                </CardBody>
              </Card>

             })

            
        : <Heading>order is Empty</Heading>  }
        </SimpleGrid>
    </div>
    );
}

export default Order;