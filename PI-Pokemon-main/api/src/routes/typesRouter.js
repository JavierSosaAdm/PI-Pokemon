const { Router } = require('express');
const {getTypes} = require('../controllers/getPokemonType');

const typesRouter = Router();

typesRouter.get("/", async (req, res) => {
  const types = await getTypes();
  res.send(types);
}); 

module.exports = typesRouter;



// const { Router } = require('router');
// const { getType } = require('../controllers/getPokemonsType');

// const typeRouter = Router();

// typeRouter.get('/', async (req, res) => {
//     const types = await getType();
//     res.send(types);
// });

// module.exports = typeRouter;


