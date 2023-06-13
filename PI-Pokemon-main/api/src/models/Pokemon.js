

const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    backImage: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
    },
    life: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    attack: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    defense: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    speed: {
      type: DataTypes.DECIMAL,
    },
    height: {
      type: DataTypes.DECIMAL,
    },
    weight: {
      type: DataTypes.DECIMAL,
    },
    created: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
  },{timestamps: false});
};

// const { DataTypes } = require('sequelize');
// // Exportamos una funcion que define el modelo
// // Luego le injectamos la conexion a sequelize.
// module.exports = (sequelize) => {
//   // defino el modelo
//   sequelize.define('pokemon', {
//     id: {
//           type: DataTypes.UUID,
//           primaryKey: true,
//           defaultValue: DataTypes.UUIDV4,
//           allowNull:true
//     },

//     name: {
//       type: DataTypes.STRING,
//       unique: true,
//       allowNull: false,
//     },

//     imagen: {
//       type: DataTypes.BLOB,
//       unique: true,
//       allowNull: false,
//     },

//     backImagen: {
//       type: DataTypes.BLOB,
//       allowNull: false,
//       defaultValue: '',
//     },

//     vida: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },

//     ataque: {
//       type: DataTypes.DECIMAL,
//       allowNull: false,
//     },

//     defensa: {
//       type: DataTypes.DECIMAL,
//       allowNull: false,
//     },

//     velocidad: {
//       type: DataTypes.DECIMAL,
//     },

//     altura: {
//       type: DataTypes.DECIMAL,
//     },

//     peso: {
//       type: DataTypes.DECIMAL,
//     },

//     creado: {
//       type: DataTypes.BOOLEAN,
//       defaultValue: false,
//     },
//   }, {
//     timestamps: false,
//     freezeTableName: true,
//   }
//   );
// };