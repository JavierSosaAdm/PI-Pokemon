const axios = require('axios');
require('dotenv').config();
const { API_URL, } = process.env;
const parsePokemonFromApi = require('../helpers/parsePokemon');

const populateDb = async (Pokemon, Type) => {
    try {
        const response = await axios.get(`${API_URL}/type`);

        const typeNames = response.data.results.map(type => {
            return {
                name: type.name
            }
        });

        await Type.bulkCreate(typeNames);
    }catch(error){
        console.error("Error llenando base de datos con types", error.message)
    }


    try {
        const response = await axios.get(`${API_URL}/pokemon?limit=60`);
        const promises = [];
        for (const pokemon of response.data.results) {
            const responsePokemon = axios.get(pokemon.url);
            promises.push(responsePokemon);
        }
        const results = await Promise.all(promises);
        for (const result of results) {
            const parsedPokemon = parsePokemonFromApi(result.data);
            const types = await Type.findAll({
                where: {
                    name: parsedPokemon.types
                }
            });
            const pokemon = await Pokemon.create(parsedPokemon);
            for (const type of types) {
                await pokemon.addType(type);
            }
        }
    }catch(error){
        console.error("Error llenando base de datos con pokemons", error.message)
    }
};

module.exports = populateDb;



// const axios = require('axios');
// require('dotenv').config();
// const { API_URL } = process.env;
// const { parsePokemonFromApi } = require('../helpers/pokeParse'); 
// const Pokemons = require('../../models/Pokemons');
// const Type = require('../../models/Type')
// const popuDb = async (Pokemons, Type) => {
//     try {
//         const res = await axios.get(`${API_URL}/type`);

//         const typeName = res.data.results.map(type => {
//             return {
//                 name:type.name
//             }
//         });

//         await Type.bulkCreate(typeName); //inserta multiples registros en la base de datos en una sola solicitud 

//     } catch (error) {
//         console.log('Error llenando base de datos con types', error.message)
//     }

//     try {
//         const res = await axios.get(`${API_URL}/pokemons?limit=60`);
//         const promises = []; // array de promesas para luego ejecutarlas 

//         for (const pokemon of res.data.results) { // recorre la lista de resultados de la API
//             const pokeRes = axios.get(pokemon.url); // se hace un get por cada pokemon y luego se guarda la promesa
//             promises.push(pokeRes);
//         }
        
//         const results= await Promise.all(promises);
        
//         for (const result of results) {
//             const pokeParse = parsePokemonFromApi(result.data)
//             const types = await Type.findAll({
//                 where: {
//                     name: pokeParse.types
//                 }
//             });

//             const pokemon = await Pokemons.create(pokeParse); 

//             for (const type of types) {
//                 await pokemon.addType(type);
//             }
//         }
        
//     } catch (error) {
//         console.log('Error llenando la base de datos con pokemons', error.message)
//     }
// };

// module.exportes = popuDb;




        