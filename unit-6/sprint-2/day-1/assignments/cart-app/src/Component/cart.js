import { useState } from 'react';
import React from 'react';
// import

function Cart() {
	const [count, setCount] = useState(0);
	const [countBiryani, setCountbiryani] = useState(0);
	const [countChip, setCountchip] = useState(0);
	return (
		<div>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-evenly',
					border: '1px solid black',
					width: '70%',
					margin: 'auto',
				}}
			>
				<h3>Noodes</h3>
				<h3>30</h3>
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-evenly',

						//     border:"1px solid black"
					}}
				>
					<button
						onClick={() => {
							return count === 0 ? { count } : setCount(prevCount => prevCount - 1);
						}}
					>
						-
					</button>
					<h4>{count}</h4>
					<button onClick={() => setCount(prevCount => prevCount + 1)}> + </button>
				</div>
			</div>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-evenly',
					border: '1px solid black',
					width: '70%',
					margin: 'auto',
				}}
			>
				<h3>Briyani</h3>
				<h3>90</h3>
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-evenly',
					}}
				>
					<button
						onClick={() => {
							return countBiryani === 0
								? { countBiryani }
								: setCountbiryani(prevCount => prevCount - 1);
						}}
					>
						-
					</button>
					<h4>{countBiryani}</h4>
					<button onClick={() => setCountbiryani(prevCount => prevCount + 1)}>+</button>
				</div>
			</div>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-evenly',
					border: '1px solid black',
					width: '70%',
					margin: 'auto',
				}}
			>
				<h3>Chips</h3>

				<h3 style={{ margin: '5px' }}>10</h3>
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-evenly',
					}}
				>
					<button
						onClick={() => {
							return countChip === 0
								? { countChip }
								: setCountchip(prevCount => prevCount - 1);
						}}
					>
						-
					</button>
					<h4 Style={{ padding: '2px' }}>{countChip}</h4>
					<button onClick={() => setCountchip(prevCount => prevCount + 1)}>+</button>
				</div>
			</div>

			<h3
				Style={{
					margin: 'auto',
					alignItems: 'centre',
				}}
			>
				Total : {count * 30 + countBiryani * 90 + countChip * 10}
			</h3>
		</div>
	);
}
export default Cart;
