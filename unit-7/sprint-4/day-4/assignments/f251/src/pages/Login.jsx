import React from 'react';
import { Heading, Input } from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login(props) {
	const navigate = useNavigate();
	const [login, setLogin] = useState({
		email: '',
		password: '',
	});

	const handleChange = e => {
		setLogin({
			...login,
			[e.target.name]: e.target.value,
		});
	};

	const submit = e => {
		e.preventdefault();
		navigate('/login');
		console.log(login);
	};

	return (
		<div>
			<div style={{ width: '30%', margin: 'auto' }}>
				<Heading>SIGNUP</Heading>
				<form onSubmit={submit}>
					<Input
						size="m"
						variant="flushed"
						htmlSize={5}
						mt="4"
						type="text"
						placeholder="Enter email"
						onChange={handleChange}
						name="email"
					/>
					<br></br>
					<Input
						size="m"
						variant="flushed"
						htmlSize={5}
						mt="4"
						type="text"
						placeholder="Enter Password"
						onChange={handleChange}
						name="password"
					/>
					<br></br>
					<Input size="md" variant="filled" htmlSize={5} mt="4" type="submit" />
				</form>
			</div>
		</div>
	);
}

export default Login;
