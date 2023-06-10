import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'space-evenly',
				backgroundColor: 'black',
				alignItems: 'center',
				height: '55px',
			}}
		>
			<Link to="/login" style={{ color: 'white' }}>
				Login
			</Link>
			<Link to="/data" style={{ color: 'white' }}>
				Data
			</Link>
			<Link to="/admin" style={{ color: 'white' }}>
				Admin
			</Link>
		</div>
	);
}

export default Navbar;
