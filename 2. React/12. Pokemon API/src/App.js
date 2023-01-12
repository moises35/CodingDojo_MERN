import { useState } from 'react';
import './App.css';


function App() {
	const [listPokemon, setListPokemon] = useState([ ]);

	const fetchPokemon = () => {
		fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
		.then((response) => response.json())
		.then((data) => setListPokemon(data.results))
		.catch((error) => console.log(error))
		.finally(() => console.log('Pokemon fetched'));
	
	};
	return (
		<>
			<button onClick={fetchPokemon}>Fetch Pokemon</button>
			<ul>
				{listPokemon.map((pokemon, index) => (
					<li key={index}>{pokemon.name}</li>

				))}
			</ul>
		</>
	);
}

export default App;
