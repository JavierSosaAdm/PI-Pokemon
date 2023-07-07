import axios from 'axios';
import { GET_POKEMON, GET_TYPES, GET_ALL_POKEMON, GET_POKEMON_ID, GET_POKEMON_NAME} from './ActionsTypes';



export function getPokemon (name = '', currentPage, orderBy, sortBy, created, type) {
    return async (dispatch) => {
        const pokeData = await axios.get(`http://localhost:3001/pokemons?name=${name}&pageNumber=${currentPage}&orderBy=${orderBy}&sortBy=${sortBy}&created=${created}&type=${type}`);
        const pokemons = pokeData.data;
        dispatch({type: GET_POKEMON, payload: pokemons});
    };
};



export function getTypes () {
    return async (dispatch) => {
        const typesData = await axios.get(`http://localhost:3001/types`);
        const types = typesData.data;
        dispatch({type: GET_TYPES, payload: types});
    };
};

export function getAllPokemon (pageNumber) {
    return async (dispatch) => {
        const allPoke = await axios.get(`http://localhost:3001/pokemons?pageNumber=${pageNumber}`);
        const pokeAll = allPoke.data;
        dispatch({type: GET_ALL_POKEMON, payload: pokeAll})
    };
};

export function getPokeId (id) {
    return async (dispatch) => {
        const pokeId = await axios.get(`http://localhost:3001/pokemons/${id}`);
        const Id = pokeId.data;
        dispatch({type: GET_POKEMON_ID, payload: Id})
    }
}

export function getPokeName (name) {
    return async (dispatch) => {
        const pokeName = await axios.get(`http://localhost:3001/pokemons/${name}`);
        const namePoke = pokeName.data;
        dispatch({type: GET_POKEMON_NAME, payload: namePoke})
    }
}