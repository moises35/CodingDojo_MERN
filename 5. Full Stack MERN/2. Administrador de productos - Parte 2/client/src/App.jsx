import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './views/Main';
import DetalleProduct from './views/DetalleProduct';

function App() {
	return (
		<div className="App">
			{/* Rutas */}
			<BrowserRouter>
				<Routes> 
					<Route path="/" element={<Main />} />
					<Route path="/:id" element={<DetalleProduct />} />
					<Route path="*" element={<h1>Error 404</h1>} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
