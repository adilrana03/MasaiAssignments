import './App.css';
import AllRoutes from './components/AllRoutes';
import Navbar from './components/Navbar';
import { useState } from 'react';
import Home from './pages/Home';

function App() {
	const [admin, setadmin] = useState(false);

	return (
		<div className="App">
			<Navbar />
			<AllRoutes />
			<Home />
		</div>
	);
}

export default App;
