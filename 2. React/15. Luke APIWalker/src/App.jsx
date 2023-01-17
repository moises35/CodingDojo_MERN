import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Form from './components/Form';
import Content from './components/Content';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Form />}> 
					<Route path=':category/:id' element={<Content />} />
					<Route path=':id' element={<Content />} />
					<Route path="*" element={<h1>404 Not Found</h1>} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
