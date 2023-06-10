import { useState } from 'react';
import Fiction from './components/Fiction';
import NonFiction from './components/NonFiction';

function App() {
	const [state, setState] = useState(true);

	const handleClick = () => {
		setState(!state);
	};

	return (
		<div>
			<h1 style={{ textAlign: 'center' }}>Mini Book Store</h1>

			<button
				data-testid="toggle-btn"
				onClick={handleClick}
				style={{
					width: '20%',
					display: 'flex',
					justifyContent: 'center',
					margin: 'auto',
					padding: '10px',
					backgroundColor: 'black',
					color: 'white',
				}}
			>
				{state ? 'Show Non-Fiction Books' : 'Show Fictional Books'}
			</button>

			<div data-testid="conditional-container">
				{/* Render either Fiction or NonFiction Based on the Condition */}
				{state ? <Fiction /> : <NonFiction />}
			</div>
		</div>
	);
}

export default App;
