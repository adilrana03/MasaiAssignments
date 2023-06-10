import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, CardBody, Heading, Image, Stack, Text, SimpleGrid, Button } from '@chakra-ui/react';
import { getOrder } from '../Redux/AppReducer/action';

function Cart(props) {
	const cart = useSelector(sd => sd.cart);
	const dispatch = useDispatch();

	const handleOrder = id => {
		dispatch(getOrder(id));
	};

	return (
		<div>
			<Heading>Cart Page</Heading>
			<SimpleGrid
				w="95%"
				margin="auto"
				mt="20px"
				spacing={[5, 5, 5, 5]}
				columns={[1, 2, 2, 4]}
			>
				{cart.length > 0 ? (
					cart.map(el => {
						return (
							<Card w="100%" variant="outline" position="none" key={el.id}>
								<CardBody>
									<Image src={el.image} alt={el.brand} borderRadius="lg" />
									<Stack mt="3" spacing="3">
										<Heading size="lg">{el.brand}</Heading>
										<Text>{el.title}</Text>
										<Text>{el.category}</Text>
										<Text color="blue.600" fontSize="2xl">
											₹{el.price}
										</Text>
									</Stack>
									<Button onClick={() => handleOrder(el.id)}>
										Confirm Order
									</Button>
								</CardBody>
							</Card>
						);
					})
				) : (
					<Heading>Cart is Empty</Heading>
				)}
			</SimpleGrid>
		</div>
	);
}

export default Cart;
