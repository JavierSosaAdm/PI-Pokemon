import axios from 'axios';
import { GET_POKEMON, GET_TYPES } from './ActionsTypes';
//import {DB_HOST, DB_USER, API_URL} = process.env;


const GetPokemon = (name = '', currentPage, orderBy, sortBy, created, type) => {
    return async (dispatch) => {
        const pokeData = await axios.get(`http://localhost:3001/pokemons?name=${name}&pageNumber=${currentPage}&orderBy=${orderBy}&sortBy=${sortBy}&created=${created}&type=${type}`);
        const pokemons = pokeData.data;
        dispatch({type: 'GET_POKEMON', payload: pokemons});
    };
};

const GetTypes = () => {
    return async (dispatch) => {
        const typesData = await axios.get(`http://localhost:3001/types`);
        const types = typesData.data;
        dispatch({type: 'GET_TYPES', payload: types});
    };
};

export default { GetPokemon, GetTypes }