import React from 'react';
import { Heading, Input, Select } from '@chakra-ui/react';
import { useState } from 'react';
import { postUser } from '../Redux/AppReducer/Action';

function User(props) {
	const [user, setUser] = useState({
		name: '',
		age: '',
		gender: '',
		country: '',
		profession: '',
	});

	const chnge = e => {
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
	};







	const submit = elem => {
		elem.preventDefault();
		postUser(user);
	};

	return (
		<div>
			<div style={{ width: '40%', margin: 'auto', color:'black' }}>
				<Heading>User Form</Heading>
				<form onSubmit={submit} style={{cursor:'pointer', boxShadow:'0 0 10px black', padding:'30px', borderRadius:'20px', marginTop:'20px'}}>
					<Input
						size="sm"
						variant="flushed"
						htmlSize={6}
						mt="6"
						type="text"
						placeholder="enter your name"
						onChange={chnge}
						name="name"

					/>
					<br></br>
					<Input
						size="sm"
						variant="flushed"
						htmlSize={6}
						mt="6"
						type="text"
						placeholder="enter your age"
						onChange={chnge}
						name="age"
					/>
					<br></br>
					<Select onChange={chnge} name="gender">
						<option value="">Gender</option>
						<option value="male">Male</option>
						<option value="female">Female</option>
					</Select>
					<br></br>
					<Input
						size="sm"
						variant="flushed"
						htmlSize={6}
						mt="6"
						type="text"
						placeholder="enter your country"
						onChange={chnge}
						name="country"
					/>
					<br></br>
					<Select onChange={chnge} name="profession">
						<option value="">Profession</option>
						<option value="Student">Student</option>
						<option value="employed">employed</option>
					</Select>
					<br></br>
					<Input size="md" variant="filled" htmlSize={5} mt="3" type="submit" style={{cursor:'pointer', color:'white', background:'green'}} />
				</form>
			</div>
		</div>
	);
}

export default User;
