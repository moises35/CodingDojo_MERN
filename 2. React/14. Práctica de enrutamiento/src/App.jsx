import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Texto from './components/Texto';


function App() {
	return (
		<div className="app">
			<BrowserRouter> 
				<Routes>
					<Route path='/home' element={<Home />} />
					<Route path='/home/:textColor/:bgColor' element={<Home />} />
					<Route path='/:text' element={<Texto />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
