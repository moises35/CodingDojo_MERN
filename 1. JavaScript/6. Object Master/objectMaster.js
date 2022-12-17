const pokemon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);

// Divisible entre 3
const divisibleTres = pokemon.filter( item => item.id % 3 === 0);
console.log(`--> Divisible entre 3`);
divisibleTres.map(item => console.log("\t", item));

// Pokemons tipo fuego
const tipoFuego = pokemon.filter( item => item.types.includes('fire'));
console.log(`\n--> Tipo fuego`);
tipoFuego.map(item => console.log("\t", item));

// Más de un tipo
const muchosTipos = pokemon.filter( item => item.types.length > 1);
console.log(`\n--> Más de un tipo`);
muchosTipos.map(item => console.log("\t", item));

// Solo nombres
const soloNombres = pokemon.map(item => item.name);
console.log(`\n--> Solo nombres`);
soloNombres.map(item => console.log("\t", item));

// Solo nombres con id mayor a 99
const soloNombres99 = pokemon.filter(item => item.id > 99).map(item => item.name);
console.log(`\n--> Solo nombres con ID mayor a 99`);
soloNombres99.map(item => console.log("\t", item));

// Tipo veneno
const tipoVeneno = pokemon.filter(item => item.types.length === 1 && item.types[0] === 'poison').map(item => item.name);
console.log(`\n--> Tipo veneno`);
tipoVeneno.map(item => console.log("\t", item));

// Primer tipo cuyo segundo tipo sea volador
const primerTipo = pokemon.filter(item => item.types.length > 1 && item.types[1] === 'flying').map(item => item.types[0]);
console.log(`\n--> Primer tipo cuyo segundo tipo sea volador`);
primerTipo.map(item => console.log("\t", item));

// Cantidad de pokémon que son de tipo "normal"
const tipoNormal = pokemon.filter(item => item.types.includes('normal'))
console.log(`\n--> Cantidad de pokémon que son de tipo normal`);
console.log('\t', tipoNormal.length)