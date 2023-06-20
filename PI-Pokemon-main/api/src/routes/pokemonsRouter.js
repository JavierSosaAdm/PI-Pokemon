const { Router } = require('express');
const { getPokemonById, getPokemons, getPokemonByName } = require("../controllers/getPokemons");
const createPokemon = require('../controllers/createPokemon');

const pokemonsRouter = Router();

pokemonsRouter.get("/", async (req, res) => {
    const pokemons = await getPokemons(req.query.name, req.query.pageNumber, req.query.orderBy, req.query.sortBy, req.query.created, req.query.type);
    res.send(pokemons);
});

pokemonsRouter.get("/:id", async (req, res) => {
    const pokemon = await getPokemonById(req.params.id);
    res.send(pokemon);
});

pokemonsRouter.get("/name", async (req, res) => {
    const pokemones = await getPokemonByName(req.params.name);
    res.send(pokemones);
})

pokemonsRouter.post("/", async (req, res) => {
    const pokemon = await createPokemon(req.body);
    res.send(pokemon);
});

module.exports = pokemonsRouter;




// const { Router } = require('express');
// const { getPokemonsById, getPokeinfo } = require('../controllers/getPokemons');
// const { crearPokemon } = require('../controllers/createPokemons');

// const pokeRouter = Router();

// pokeRouter.get('/', async (req, res) => {
//     const pokemons = await getPokeinfo(req.query.name, req.query.numPag, req.query.orderBy, req.query.sortBy, req.query.create, req.query.type);
//     res.send(pokemons);
// });

// pokeRouter.get('/:id', async (req, res) => {
//     const pokemon = await getPokemonsById(req.params.id);
//     res.send(pokemon);
// });

// pokeRouter.post('/', async (req, res) => {
//     const pokeCreado = await crearPokemon(req.body);
//     res.send(pokeCreado);
// });

// module.exports = pokeRouter; 

