import { Button, Input, Stack } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const initialState = {
	email: '',
	password: '',
};
function Login() {
	const navigate = useNavigate();
	const [formData, setFormData] = useState(initialState);

	const handleChange = e => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = e => {
		axios
			.post('http://localhost:5000/login', formData)
			.then(res => {
				localStorage.setItem('token', JSON.stringify(res.data.token));
				alert('success');
				navigate('/');
			})
			.catch(err => console.log(err));
	};

	return (
		<Stack width="30%" margin="auto">
			<Input placeholder="Enter Email" onChange={handleChange} name="email" />
			<Input placeholder="Enter Password" onChange={handleChange} name="password" />
			<Button variant="contained" onClick={handleSubmit}>
				Login
			</Button>
		</Stack>
	);
}

export default Login;
