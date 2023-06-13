
const { Type } = require('../db');

const getTypes = async () => {
    try {
        const types = await Type.findAll();
        return types;
    } catch (error) {
        throw new Error('Error al buscar types');
    }
};

module.exports = {getTypes};


// const { Type } = require('../../db');

// const getType = async () => {
//     try {
//         const types = await Type.findAll();
//         return types;

//     } catch (error) {
//         throw new Error('Error de Busqueda')
//     }
// }

// module.exports = getType;