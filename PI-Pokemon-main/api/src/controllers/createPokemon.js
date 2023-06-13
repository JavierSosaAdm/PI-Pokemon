const { Pokemon, Type } = require('../db');

const createPokemon = async ({ name, image, life, attack, defense, speed, height, weight, types}) => {
    let nameMinus = name.toLowerCase();
    const pokemon = await Pokemon.create({
        name: nameMinus, image, backImage: image, life, attack, defense, speed, height, weight, created: true
    });

    for (const type of types) {
        const typeDb = await Type.findOne({
            where: {
                id: type.id
            }
        })
        await pokemon.addType(typeDb);
    }
    return pokemon;
};

module.exports = createPokemon;








// const { Pokemons, Type } = require('../db');

// const crearPokemon = async ({name, imagen, types, vida, ataque, defensa, velocidad, altura, peso}) => {
//     const pokeName = name.toLowerCase();
//     const pokemon = await Pokemons.create({
//         name: pokeName,
//         imagen,
//         backImagen: imagen,
//         vida,
//         ataque,
//         defensa,
//         velocidad,
//         altura,
//         peso,
//         created: true,
//     });

//     for (const typeId of types) {
//         const typeDb = await Type.findOne({ //Este método se utiliza para buscar un único registro que cumpla con ciertas condiciones en una tabla de la base de datos.
//             where: {
//                 id: typeId
//             }
//         }) 
//         await pokemon.addType(typeDb);
//     }
//     return pokemon;
// }

// module.exports = crearPokemon;