import './App.css';
import Form from './components/LogIn';
import { Navbar } from './components';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {

	return (
		<Router>
			<Navbar/>
			<div className="bg-section"></div>
			<Form />
		</Router>
	);
}

export default App;