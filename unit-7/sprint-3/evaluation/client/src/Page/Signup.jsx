import { Button, Input, Stack } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const initialState = {
	email: '',
	password: '',
};

function Signup() {
	const navigate = useNavigate();
	const [formData, setFormData] = useState(initialState);
	const handleChange = e => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = e => {
		axios
			.post('http://localhost:5000/register', formData)
			.then(res => {
				console.log(res);
				if (res.data.email) {
					console.log(res.data);
					navigate('/login');
				} else {
					alert(res.data.message);
				}
			})
			.catch(err => {
				console.log(err.message);
			});
	};

	return (
		<Stack width="30%" margin="auto">
			{/* <Input placeholder="Enter Name" onChange={handleChange} name="name" /> */}
			<Input placeholder=" Enter Email" onChange={handleChange} name="email" />
			{/* <Input placeholder="Enter Gender" onChange={handleChange} name="gender" /> */}
			<Input placeholder="Enter Password" onChange={handleChange} name="password" />
			<Button variant="contained" onClick={handleSubmit}>
				Register
			</Button>
		</Stack>
	);
}

export default Signup;
