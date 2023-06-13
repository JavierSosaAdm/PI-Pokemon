const axios = require('axios');
require('dotenv').config();
const { API_URL } = process.env;
const { Pokemon, Type } = require('../db');
const { Op } = require('sequelize');

const getPokemons = async (name = '', pageNumber = 0, orderBy = "name", sortBy = "DESC", created = "all", type = "all") => {
    const pageSize = 12;
    try {

        let where = {};
        let includeType = {
            model: Type,
            where: {},
            as: 'types',
            attributes: ["id", "name"]
        };

        if (name && name.length > 0) {
            where.name = {
                [Op.substring]: name.toLowerCase(),
            };
        }
        if (created === "local") {
            where.created = true;
        } else if (created === "api") {
            where.created = false;
        }

        if (type !== "all") {
            includeType.where.id = type;
        }

        const {rows, count} = await Pokemon.findAndCountAll(
            {
                order: [[orderBy, sortBy]],
                limit: pageSize,
                offset: pageSize * pageNumber,
                where: where,
                include: [includeType],
                distinct: true
            });
        return {
            items: rows,
            totalPages: Math.ceil(count / pageSize)
        };
    } catch (error) {
        throw new Error(`Error al buscar los pokemones en la base de datos: ${error.message}`);
    }
}

const getPokemonById = async (id) => {
    try {
        const pokemon = await Pokemon.findOne({
            where: {
                id: id,
            }
        });
        return pokemon;
    } catch (error) {
        throw new Error(`Error al buscar el pokemon por Id: ${error.message}`);
    }
}



module.exports = { getPokemons, getPokemonById };










// const axios = require('axios');
// const { Pokemons } = require('../models/Pokemons');
// const { Type } = require('../models/Type')
// require('dotenv').config();
// const { API_URL } = process.env;
// const { Op } = require('sequelize');

// const getPokeinfo = async(name = '', numPag = 0, orderBy = "name", sortBy = "DESC", created = "all", type = "all") => {
//     const buscaTodaInfo = await axios.get(`${API_URL}`);
//     const pageSize = 12;
    
//     try {
//         let where = {};
//         let includeType = {
//             model: Type,
//             where: {},
//             as: 'types',
//             attributes: ["id", "name"]
//         };

//         if (name && name.length > 0) {
//             where.name = {
//                 [Op.substring]: name.toLowerCase(),
//             };
//         }
//         if (created === 'local') {
//             where.created = true;
//         } else if (created === 'api') {
//             where.created = false;
//         }

//         if (type !== 'all') {
//             includeType.where.id = type;
//         }

//         const { rows, count } = await Pokemons.findAndCountAll(
//             {
//                 order: [[orderBy, sortBy]],
//                 limit: pageSize,
//                 offset: pageSize * numPag,
//                 where: where,
//                 include: [includeType], // se usa para cargar modelos y la relaciones aqui no solo extraigo el tipo si no tmb los caracteres del pokemon
//                 distinct: true
//             });

//             return {
//                 items: rows,
//                 totalPages: Math.ceil(count / pageSize)
//             };
        
//     } catch (error) {
//         throw new Error(`Error al buscar los pokemons en la base de datos: ${error.message}`);
//     }
// };

// const getPokemonsById = async (id) => {
//     try {
//         const pokemon = await Pokemons.findOne({
//             where: {
//                 id: id,
//             }
//         });

//         return pokemon;

//     } catch (error) {
//         throw new Error(`No se encuentra ID en la base de datos: ${error.message}`);
//     }
// };

// module.exports = {getPokeinfo, getPokemonsById};













































