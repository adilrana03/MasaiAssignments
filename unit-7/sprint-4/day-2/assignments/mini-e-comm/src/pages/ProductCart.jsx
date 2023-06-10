import React from 'react';
import { Card, CardBody, Heading, Image, Stack, Text } from '@chakra-ui/react'

function ProductCart({data}) {

    return (
        <>
        <Card w='100%'  variant="outline" position="none">
    <CardBody>
      <Image
        src={data.image}
        alt={data.brand}
        borderRadius='lg'
      />
      <Stack mt='3' spacing='3'>
        <Heading size='lg'>{data.brand}</Heading>
        <Text>
           {data.title}
        </Text>
        <Text>
           {data.category}
        </Text>
        <Text color='blue.600' fontSize='2xl'>
        ₹{data.price}
        </Text>
      </Stack>
    </CardBody>
  </Card>
        </>
    );
}

export default ProductCart;