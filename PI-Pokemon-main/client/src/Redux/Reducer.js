import { GET_POKEMON, GET_TYPES, GET_ALL_POKEMON, GET_POKEMON_ID, GET_POKEMON_NAME } from './ActionsTypes';

const initialState = {
    pokemon: {
        items: [],
        totalPages: 0
    },
    types: [],
    ids: {},
    name: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_POKEMON:
            return {...state, pokemon: action.payload};
        
        case GET_POKEMON: 
            return {...state, pokemon: action.payload};

        case GET_TYPES:
            return {...state, types: action.payload};
        
        case GET_POKEMON_ID:
            return {...state, ids: action.payload};

        case GET_POKEMON_NAME:
            return {...state, name: action.payload};
        
        default: 
            return {...state};
    }
};

export default rootReducer; 