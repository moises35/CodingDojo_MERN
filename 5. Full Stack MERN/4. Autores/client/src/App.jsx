import './App.css';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Main from './views/Main';
import CreateUser from './views/CreateUser';
import EditUser from './views/EditUser';

function App() {

	return (
		<div className="App">
			<BrowserRouter> 
				<Routes>
					<Route path='/' element={<>
						<h1 className='m-4'>Favorite Authors</h1> 
						<Outlet/>
					</>}>
						<Route index element={<Main />} />
						<Route path='new' element={<CreateUser />} />
						<Route path='edit/:id' element={<EditUser />} />
					</Route>
					<Route path="*" element={<h1>Error 404</h1>} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
