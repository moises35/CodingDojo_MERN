import axios from "axios";
import { useState } from "react"

const Pokemon = () => {
    const [listPokemon, setListPokemon] = useState([]);

    const getPokemon = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
            .then(response => { setListPokemon(response.data.results) })
            .catch(err => { console.log(err) })
    }
    
    return (
        <div className="pokemon">
            <button onClick={getPokemon}>Fetch Pokemon</button>
            <ul>
                {listPokemon.map((pokemon, i) => {
                    return <li key={i}>{pokemon.name}</li>
                })}
            </ul>
        </div>
    )
}

export default Pokemon