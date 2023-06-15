import { GET_POKEMON, GET_TYPES } from './ActionsTypes';

const initialState = {
    pokemon: {
        items: [],
        totalPages: 0
    },
    types: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POKEMON: 
            return {...state, pokemon: action.payload};

        case GET_TYPES:
            return {...state, types: action.payload};
        
            default: 
            return {...state};
    }
};

export default rootReducer; 