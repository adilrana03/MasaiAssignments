import './Counter.css';
import { useState, useEffect } from 'react';

function Counter(props) {
	//creating the state variable
	let [state, setState] = useState(0);
	// console.log("Counter Comp is Called");

	useEffect(() => {
		document.title = `Count Value is ${state}`;
	});

	const updateCount = () => {
		setState(prevState => prevState + 1);
		document.title = `Clicked ${state} times`;
	};

	return (
		<div className="counter">
			<h2>Count Value is {state}</h2>
			<button id="btn" onClick={updateCount}>
				Update Count
			</button>
		</div>
	);
}
export default Counter;
